/// <reference types="vite/client" />

type ApiGeneralResponse<T> = {
  data: T;
  message: string | null;
  duration: string;
};

type TranslateFunction = (key: string) => string;
