import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import mdx from "@mdx-js/rollup";
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";

installGlobals();

export default defineConfig({
  plugins: [mdx(), remix(), tsconfigPaths()],
});
