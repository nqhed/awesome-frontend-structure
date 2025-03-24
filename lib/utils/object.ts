export function getNestedObjectPropertyFromPath({
  obj,
  path,
}: {
  obj: any;
  path: string;
}) {
  if (
    typeof obj === "object" &&
    obj !== null &&
    typeof path === "string" &&
    path !== ""
  ) {
    try {
      return path
        .replace(/\[([^\[\]]*)\]/g, ".$1.")
        .split(".")
        .filter((t) => t !== "")
        .reduce((prev, cur) => prev && prev[cur], obj);
    } catch (error: any) {
      throw new Error(error.message);
    }
  } else {
    throw new Error(
      "obj must be an object and path must not be null or an empty string"
    );
  }
}
