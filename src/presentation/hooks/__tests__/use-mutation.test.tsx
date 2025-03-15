import { describe, it, expect } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useMutation } from "@/presentation/hooks/use-mutation";
import { ReactNode } from "react";

const queryClient = new QueryClient();

const ChildWithMutation = () => {
  const mutation = useMutation({
    mutationFn: () => Promise.resolve("data"),
  });

  return <div>{mutation.data}</div>;
};

const wrapper = ({ children }: { children?: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ChildWithMutation />
    {children}
  </QueryClientProvider>
);

describe("useMutation", () => {
  it("should return the data", async () => {
    const { result } = renderHook(
      () =>
        useMutation({
          mutationFn: () => Promise.resolve("data"),
        }),
      { wrapper },
    );

    await waitFor(() => {
      expect(result.current).toBeDefined();
    });
  });
});
