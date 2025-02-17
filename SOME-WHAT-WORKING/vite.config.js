import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      abcjs$: "abcjs/dist/abcjs-basic.min.js",
      "abcjs-midi": "/public/js/ext/abcjs_midi_6.0.0-beta.25-min.js",
    },
  },
  optimizeDeps: {
    include: ["ml5", "p5"], // ✅ Force Vite to optimize ml5 & p5
  },
});
