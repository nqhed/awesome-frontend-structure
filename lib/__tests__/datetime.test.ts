import { describe, test, expect } from "vitest";
import * as datetime from "../datetime";

describe("Datetime", () => {
  describe("getDateFormat_yyyyMMdd_hyphen", () => {
    test("formats date with hyphens correctly", () => {
      expect(
        datetime.getDateFormat_yyyyMMdd_hyphen({ datetime: "Sun Mar 09 2025" }),
      ).toBe("2025-03-09");
    });

    test("handles single digit month and day", () => {
      expect(
        datetime.getDateFormat_yyyyMMdd_hyphen({ datetime: "Wed Jan 05 2025" }),
      ).toBe("2025-01-05");
    });

    test("throws error when datetime is missing", () => {
      expect(() => datetime.getDateFormat_yyyyMMdd_hyphen({})).toThrowError();
    });

    test("throws error when datetime is invalid", () => {
      expect(() => 
        datetime.getDateFormat_yyyyMMdd_hyphen({ datetime: "invalid date" })
      ).toThrowError();
    });
  });

  describe("getDateFormat_yyyyMMdd_slash", () => {
    test("formats date with slashes correctly", () => {
      expect(
        datetime.getDateFormat_yyyyMMdd_slash({ datetime: "Sun Mar 09 2025" }),
      ).toBe("2025/03/09");
    });

    test("handles single digit month and day", () => {
      expect(
        datetime.getDateFormat_yyyyMMdd_slash({ datetime: "Wed Jan 05 2025" }),
      ).toBe("2025/01/05");
    });

    test("throws error when datetime is missing", () => {
      expect(() => datetime.getDateFormat_yyyyMMdd_slash({})).toThrowError();
    });

    test("throws error when datetime is invalid", () => {
      expect(() => 
        datetime.getDateFormat_yyyyMMdd_slash({ datetime: "invalid date" })
      ).toThrowError();
    });
  });
});
