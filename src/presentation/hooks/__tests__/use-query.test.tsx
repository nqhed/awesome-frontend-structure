import { describe, test, expect } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useQuery } from "@/presentation/hooks/use-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();
const wrapper = ({ children }: { children?: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useQuery", () => {
  test("return the data", async () => {
    const { result } = renderHook(
      () =>
        useQuery({
          queryKey: ["test"],
          queryFn: () => Promise.resolve("data"),
        }),
      { wrapper },
    );

    await waitFor(() => {
      expect(result.current.data).toBe("data");
    });
  });
});
