import { describe, vi, test, expect } from "vitest";
import { Lib } from "@/lib";
import { auth } from "@/services/auth";

describe("Auth Service Controller", () => {
  describe("login function", () => {
    test("call with valid input", async () => {
      vi.spyOn(Lib.httpFetcher, "post").mockResolvedValue({
        data: { token: "test" },
      });
      const result = await auth.login({
        payload: {
          username: "test",
          password: "test",
        },
      });
      expect(result).toStrictEqual({ token: "test" });
    });
    test("call with invalid input", async () => {
      const promise = auth.login({
        payload: {
          username: null,
          password: null,
        },
      } as any);
      await expect(promise).rejects.toThrow("INVALID_INPUT");
    });
    test("call with error", async () => {
      vi.spyOn(Lib.httpFetcher, "post").mockRejectedValue(new Error("test"));
      const promise = auth.login({
        payload: {
          username: "test",
          password: "test",
        },
      });
      await expect(promise).rejects.toThrow("test");
    });
  });
});
