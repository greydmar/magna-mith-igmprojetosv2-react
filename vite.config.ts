import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@store": path.resolve(__dirname, "src/store"),
      "@theme": path.resolve(__dirname, "src/theme"),
      "@validations": path.resolve(__dirname, "src/validations"),
      "@modals": path.resolve(__dirname, "src/modals"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@libs": path.resolve(__dirname, "src/libs"),
      "@data": path.resolve(__dirname, "src/data"),
      "@context": path.resolve(__dirname, "src/context"),
    },
  },
  plugins: [react()],
});
