import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/configs/test.ts",
    include: ["**/*.test.ts", "**/*.test.tsx"],
    exclude: ["**/e2e-tests/**", "**/node_modules/**"],
    coverage: {
      exclude: [
        "**__tests__**",
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
        "**/lib/constants/**",
        "**/lib/http-client/**",
      ],
    },
  },
});
