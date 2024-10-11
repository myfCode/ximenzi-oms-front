import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^~/, replacement: path.resolve(__dirname, "./") },
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ],
  },
  server: {
    // port: 3000,
    proxy: {
      "/api": {
        target: `http://localhost:3000`,
        changeOrigin: true,
        rewrite: (pre) => pre.replace(/^\/api/, ""), // 将 /api 重写为空
      },
    },
  },
});
