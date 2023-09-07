// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Your API proxy configurations, if needed.
    },
    // Add this configuration for history API fallback
    hmr: {
      protocol: "ws",
    },
    // Add this configuration for history API fallback
    cors: true,
  },
});
