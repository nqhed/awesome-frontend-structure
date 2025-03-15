import { describe, it, expect } from "vitest";
import * as utils from "@/lib//utils";

describe("Utils", () => {
  describe("cn", () => {
    it("should return class names", () => {
      expect(utils.cn("class-1", "class-2")).toBe("class-1 class-2");
    });
  });

  describe("joinUrls", () => {
    it("should join urls", () => {
      expect(utils.joinUrls({ urls: ["1", "2", "3"], isAbsolute: true })).toBe(
        "/1/2/3",
      );
    });
  });

  describe("applyPrefix", () => {
    it("should apply no prefix", () => {
      expect(utils.applyPrefix({ url: "/test", prefix: "none" })).toBe("/test");
    });
    it("should apply prefix", () => {
      expect(utils.applyPrefix({ url: "/test", prefix: "other-service" })).toBe(
        "/other-service/test",
      );
    });
  });

  describe("assignParamsToUrl", () => {
    it("should return url if no params", () => {
      expect(
        utils.assignParamsToUrl({
          url: "/test/{id}",
          params: [{ key: "id", value: "idValue" }],
        }),
      ).toBe("/test/idValue");
    });
  });
});
