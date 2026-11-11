
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

declare const process: {
  env: Record<string, string | undefined>;
  cwd(): string;
};

export default defineConfig({
  // Custom domain hosting uses the root path.
  base: "/Portfolio/",

  plugins: [
    react(),
    tailwindcss(),
  ],

  server: {
    host: "127.0.0.1",
    port: Number(process.env.WEB_PORT ?? "5173"),

    hmr: {
      overlay: false,
    },

    watch: {
      ignored: [
        (p: string) =>
          p.startsWith(`${process.cwd()}/server/`) ||
          p.startsWith(`${process.cwd()}/.web-builder/`),

        "**/*.db",
        "**/*.db-*",
        "**/*.tsbuildinfo",
        `${process.cwd()}/*.md`,
      ],
    },

    proxy: {
      "/api": {
        target: `http://127.0.0.1:${process.env.BACKEND_PORT ?? "8000"}`,
        changeOrigin: true,
        ws: true,
      },
    },
  },
});
