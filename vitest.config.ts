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
    coverage: {
      exclude: [
        "**__tests__**",
        "**/_models",
        "**/services/index.**",
        "**/*.dto.**",
        "**/main.**",
        "**/app/**",
        "**/presentation/components/**/*.tsx",
        "**/presentation/features/**/components/*.tsx",
        "**/presentation/features/**/*.view.tsx",
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
