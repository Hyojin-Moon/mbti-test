import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // "@/components/..." 형태로 사용 가능
    },
  },
  server: {
    historyApiFallback: true //  새로고침 시 index.html을 반환하도록 설정
  }
});