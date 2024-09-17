import mdx from "@mdx-js/rollup";
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import tsconfigPaths from "vite-tsconfig-paths";
import {
  configDefaults,
  coverageConfigDefaults,
  defineConfig,
} from "vitest/config";

installGlobals();

export default defineConfig({
  plugins: [
    mdx(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./setupTest.ts",
    exclude: [...configDefaults.exclude],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        ...coverageConfigDefaults.exclude,
        "**/tailwind.config.ts/**",
        "**/postcss.config.js/**",
        "node_modules",
        "dist",
        "build",
        "public",
        "coverage",
        "app/__test__",
        "app/__mock__",
      ],
      thresholds: {
        functions: 80,
        branches: 80,
        "**/index.ts": {
          statements: 0,
          functions: 0,
          branches: 0,
          lines: 0,
        },
      },
    },
    css: false,
  },
});
