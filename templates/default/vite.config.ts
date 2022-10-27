import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    solidPlugin(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    lib: {
      entry: "./src/{{capital name}}.tsx",
      name: "{{capital name}}",
      fileName: (format) => `{{name}}.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["solid-js"],
    },
  },
});
