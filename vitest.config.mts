import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    include: ["**/*.test.ts", "**/*.test.tsx"],
    exclude: ["**/e2e-tests/**", "**/node_modules/**"],
    coverage: {
      exclude: [
        "**.next/**",
        "**__tests__**",
        "**e2e-tests**",
        "**/_models",
        "**/services/index.**",
        "**/*.dto.**",
        "**/main.**",
        "**/app/**",
        "**/presentation/components/**/*.tsx",
        "**/presentation/views/**/components/*.tsx",
        "**/presentation/views/**/*.view.tsx",
        "**/assets/**",
        "**.config.**",
        "**prettier**",
        "**/**.d.ts",
        "**/lib/translator/**",
        "**/lib/server/**",
        "**/lib/constants/**",
        "**/lib/http-fetcher/**",
        "**middleware.ts**"
      ],
    },
  },
});
