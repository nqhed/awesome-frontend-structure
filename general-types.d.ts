type LocaleType = "en" | "vi";

type ApiGeneralInput<T> = {
  payload: T;
  options?: Omit<RequestInit | "body">;
};

type ApiGeneralResponse<T> = {
  data: T;
  message: string | null;
  duration: string;
};

type TranslateFunction = (key: string) => string;
