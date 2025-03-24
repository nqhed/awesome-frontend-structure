import { describe, test, expect } from "vitest";
import httpFetcher from "@/lib/http-fetcher";

describe("HttpFetcher", () => {
  test("get method to be defined", () => {
    expect(httpFetcher.get).toBeDefined();
  });

  test("post method to be defined", () => {
    expect(httpFetcher.post).toBeDefined();
  });

  test("put method to be defined", () => {
    expect(httpFetcher.put).toBeDefined();
  });

  test("patch method to be defined", () => {
    expect(httpFetcher.patch).toBeDefined();
  });

  test("delete method to be defined", () => {
    expect(httpFetcher.delete).toBeDefined();
  });
});
