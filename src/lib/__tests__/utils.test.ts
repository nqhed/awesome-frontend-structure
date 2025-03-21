import { describe, test, expect } from "vitest";
import * as utils from "@/lib//utils";

describe("Utils", () => {
  describe("cn", () => {
    test("return class names", () => {
      expect(utils.cn("class-1", "class-2")).toBe("class-1 class-2");
    });
  });

  describe("joinUrls", () => {
    test("join urls", () => {
      expect(utils.joinUrls({ urls: ["1", "2", "3"], isAbsolute: true })).toBe(
        "/1/2/3",
      );
      expect(utils.joinUrls({ urls: ["1", "2", "3"], isAbsolute: false })).toBe(
        "1/2/3",
      );
      expect(utils.joinUrls({ urls: ["/1", "2", "3"], isAbsolute: true })).toBe(
        "/1/2/3",
      );
    });
    test("join urls no urls", () => {
      expect(utils.joinUrls({ urls: [], isAbsolute: true })).toBe("/");
    });
    test("join urls error", () => {
      expect(() =>
        utils.joinUrls({ urls: ["1", "2", 3] as string[], isAbsolute: true }),
      ).toThrowError();
    });
  });

  describe("applyPrefix", () => {
    test("apply no prefix", () => {
      expect(utils.applyPrefix({ url: "/test", prefix: "none" })).toBe("/test");
    });
    test("apply no prefix 2", () => {
      expect(utils.applyPrefix({ url: "", prefix: "none" })).toBe("/");
    });
    test("apply prefix", () => {
      expect(utils.applyPrefix({ url: "/test", prefix: "other-service" })).toBe(
        "/other-service/test",
      );
    });
  });

  describe("assignParamsToUrl", () => {
    test("return url if no params", () => {
      expect(
        utils.assignParamsToUrl({
          url: "/test/{id}",
          params: [],
        }),
      ).toBe("/test/{id}");
    });
    test("return url with params", () => {
      expect(
        utils.assignParamsToUrl({
          url: "/test/{id}",
          params: [{ key: "id", value: "idValue" }],
        }),
      ).toBe("/test/idValue");
    });
    test("return url error", () => {
      expect(() =>
        utils.assignParamsToUrl({
          url: null as any,
          params: [{ key: "id", value: "idValue" }],
        }),
      ).toThrowError();
    });
  });
});
