import { describe, it, expect } from "vitest";
import httpClient from "@/lib/http-client";

describe("HttpClient", () => {
  it("should get method to be defined", () => {
    expect(httpClient.get).toBeDefined();
  });

  it("should post method to be defined", () => {
    expect(httpClient.post).toBeDefined();
  });

  it("should put method to be defined", () => {
    expect(httpClient.put).toBeDefined();
  });

  it("should patch method to be defined", () => {
    expect(httpClient.patch).toBeDefined();
  });

  it("should delete method to be defined", () => {
    expect(httpClient.delete).toBeDefined();
  });
});
