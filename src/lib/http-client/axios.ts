import axiosDefault from "axios";
import { Lib } from "@/lib";

const api = axiosDefault.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost",
});

let isRefreshing = false;
let failedQueue: any = [];

const processQueue = (error: any, token = null) => {
  failedQueue.forEach((prom: any) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(
      Lib.CONSTANTS.STORAGES.LOCAL.ACCESS_TOKEN,
    );
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originalRequest = error.config;
    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = "Bearer " + token;

            return api(originalRequest);
          })
          .then((valueRes: any) => {
            return valueRes.data;
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      } else {
        originalRequest._retry = true;
        isRefreshing = true;
        try {
          const refreshToken = localStorage.getItem(
            Lib.CONSTANTS.STORAGES.LOCAL.REFRESH_TOKEN,
          );
          // call api refresh token here
          // note: the response is just an example
          const response = ((refreshToken) => ({
            data: {
              accessToken: "fakeAccessToken",
              refreshToken: refreshToken,
            },
          }))(refreshToken);
          if (response.data) {
            const {
              accessToken: newAccessToken,
              refreshToken: newRefreshToken,
            } = response.data as any;

            localStorage.setItem(
              Lib.CONSTANTS.STORAGES.LOCAL.ACCESS_TOKEN,
              newAccessToken,
            );
            localStorage.setItem(
              Lib.CONSTANTS.STORAGES.LOCAL.REFRESH_TOKEN,
              newRefreshToken,
            );
            // Retry the original request with the new token
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            processQueue(null, newAccessToken);
            return api(originalRequest);
          }
        } catch (error) {
          processQueue(error, null);
          // Handle refresh token error or redirect to login
          localStorage.removeItem(Lib.CONSTANTS.STORAGES.LOCAL.ACCESS_TOKEN);
          localStorage.removeItem(Lib.CONSTANTS.STORAGES.LOCAL.REFRESH_TOKEN);

          window.location.href = `${Lib.utils.joinUrls({
            urls: [
              Lib.CONSTANTS.APP_URLS.AUTH.BASE,
              Lib.CONSTANTS.APP_URLS.AUTH.LOGIN,
            ],
            isAbsolute: true,
          })}`;
        } finally {
          isRefreshing = false;
        }
      }
    }

    return Promise.reject(error);
  },
);

export const axios = api;
