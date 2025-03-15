import { describe, it, expect } from "vitest";
import { auth } from "@/services/auth";

describe("Auth Service Schema", () => {
  describe("loginInputSchema", () => {
    it("should run without error", () => {
      const result = auth.loginInputSchema.safeParse({
        username: "test",
        password: "test",
      }).data;
      expect(result).toStrictEqual({
        username: "test",
        password: "test",
      });
    });
    it("should run with error", () => {
      const result = auth.loginInputSchema.safeParse({
        username: null,
        password: null,
      }).success;
      expect(result).toEqual(false);
    });
  });
});
