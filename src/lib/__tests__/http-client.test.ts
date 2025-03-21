import { describe, test, expect } from "vitest";
import httpClient from "@/lib/http-client";

describe("HttpClient", () => {
  test("get method to be defined", () => {
    expect(httpClient.get).toBeDefined();
  });

  test("post method to be defined", () => {
    expect(httpClient.post).toBeDefined();
  });

  test("put method to be defined", () => {
    expect(httpClient.put).toBeDefined();
  });

  test("patch method to be defined", () => {
    expect(httpClient.patch).toBeDefined();
  });

  test("delete method to be defined", () => {
    expect(httpClient.delete).toBeDefined();
  });
});
