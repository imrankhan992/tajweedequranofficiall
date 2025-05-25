import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/",
  assetsInclude: ["**/*.md"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      buffer: "buffer",         // Add buffer alias
      process: "process/browser", // Optional for process.env
    },
  },
  define: {
    global: "globalThis",        // Define global for Buffer support
    "process.env": {},           // Optional: Avoid process.env errors
  },
});
