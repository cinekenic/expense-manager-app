/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/expense-manager-app/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    open: true,
  },
});
