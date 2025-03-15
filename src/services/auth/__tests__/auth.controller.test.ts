import { describe, vi, it, expect } from "vitest";
import { Lib } from "@/lib";
import { auth } from "@/services/auth";

describe("Auth Service Controller", () => {
  describe("login function", () => {
    it("should be call with valid input", async () => {
      vi.spyOn(Lib.httpClient, "post").mockResolvedValue({
        data: { token: "test" },
      });
      const result = await auth.login({
        username: "test",
        password: "test",
      });
      expect(result).toStrictEqual({ token: "test" });
    });
    it("should be call with invalid input", async () => {
      const promise = auth.login({
        username: null,
        password: null,
      } as any);
      await expect(promise).rejects.toThrow("INVALID_INPUT");
    });
    it("should be call with error", async () => {
      vi.spyOn(Lib.httpClient, "post").mockRejectedValue(new Error("test"));
      const promise = auth.login({
        username: "test",
        password: "test",
      });
      await expect(promise).rejects.toThrow("test");
    });
  });
});
