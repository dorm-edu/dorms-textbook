import { defineConfig } from "vite";
export default defineConfig({
  build: {
    lib: { entry: "src/index.js", formats: ["es"], fileName: () => "dt-engine.js" },
    outDir: "dist/v2",
    cssCodeSplit: false,
    minify: "esbuild",
    sourcemap: false,
    rollupOptions: { output: { assetFileNames: "dt-engine[extname]" } },
  },
});
