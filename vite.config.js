import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";
import viteImagemin from "vite-plugin-imagemin";
import viteCompression from "vite-plugin-compression";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import { ViteWebfontDownload } from "vite-plugin-webfont-dl";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "assets",
        replacement: path.resolve(__dirname, "./src/assets"),
      },
    ],
  },
  plugins: [
    react(),
    ViteWebfontDownload(),
    chunkSplitPlugin(),
    imagetools(),
    viteCompression({
      algorithm: "brotliCompress",
      threshold: 100,
    }),
  ],
});
