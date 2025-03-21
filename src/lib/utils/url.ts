export function joinUrls({
  urls,
  isAbsolute,
}: {
  urls: string[];
  isAbsolute?: boolean;
}) {
  if (Array.isArray(urls) && urls.every((item) => typeof item === "string")) {
    return `${isAbsolute ? "/" : ""}${urls.map((item) => (item[0] === "/" ? item.slice(1) : item)).join("/")}`;
  }
  throw Error("urls must be an array of string.");
}

export function assignParamsToUrl({
  url,
  params,
}: {
  url: string;
  params: { key: string; value: string }[];
}) {
  if (typeof url !== "string") {
    throw Error("url must be a string.");
  }
  if (
    !Array.isArray(params) ||
    (Array.isArray(params) && params.length === 0)
  ) {
    return url;
  }
  let urlTemp = url;
  params.forEach((param) => {
    const searchStr = param.key.replace("{", "").replace("}", "");
    urlTemp = urlTemp.replace(`{${searchStr}}`, param.value);
  });
  return urlTemp;
}

export function applyPrefix({
  url,
  prefix,
}: {
  prefix?: "none" | "other-service";
  url: string;
}) {
  const finalUrl = url[0] === "/" ? url : "/" + url;
  switch (prefix) {
    case "other-service":
      return `/other-service${finalUrl}`;
    default:
      return finalUrl;
  }
}
