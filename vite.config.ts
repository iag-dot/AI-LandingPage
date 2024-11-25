import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Ensure you import path correctly

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Use the correct alias for your src directory
    },
  },
});
