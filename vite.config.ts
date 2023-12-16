import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
/// @ts-ignore
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    /// @ts-ignore
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
