const fetchGet = async (url: string, options: RequestInit) =>
  (
    await fetch(url, {
      ...options,
      method: "GET",
    })
  ).json();

const fetchPost = async (url: string, options: RequestInit) =>
  (
    await fetch(url, {
      ...options,
      method: "POST",
    })
  ).json();

const fetchPut = async (url: string, options: RequestInit) =>
  (
    await fetch(url, {
      ...options,
      method: "PUT",
    })
  ).json();

const fetchPatch = async (url: string, options: RequestInit) =>
  (
    await fetch(url, {
      ...options,
      method: "PATCH",
    })
  ).json();

const fetchDelete = async (url: string, options: RequestInit) =>
  (
    await fetch(url, {
      ...options,
      method: "DELETE",
    })
  ).json();

const httpFetcher = {
  get: fetchGet,
  post: fetchPost,
  put: fetchPut,
  patch: fetchPatch,
  delete: fetchDelete,
};

export default httpFetcher;
