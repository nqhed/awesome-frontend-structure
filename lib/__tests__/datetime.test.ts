import { describe, test, expect } from "vitest";
import * as datetime from "../datetime";

describe("Datetime", () => {
  test("display format yyyy-MM-dd", () => {
    expect(
      datetime.getDateFormat_yyyyMMdd_hyphen({ datetime: "Sun Mar 09 2025" }),
    ).toBe("2025-03-09");
  });
  test("display format yyyy-MM-dd error", () => {
    expect(() => datetime.getDateFormat_yyyyMMdd_hyphen({})).toThrowError();
  });

  test("display format yyyy/MM/dd", () => {
    expect(
      datetime.getDateFormat_yyyyMMdd_slash({ datetime: "Sun Mar 09 2025" }),
    ).toBe("2025/03/09");
  });
  test("display format yyyy/MM/dd error", () => {
    expect(() => datetime.getDateFormat_yyyyMMdd_slash({})).toThrowError();
  });
});
