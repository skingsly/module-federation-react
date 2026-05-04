import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(() => ({
  server: { fs: { allow: [".", "..", "../shared"] } },
  build: {
    target: "chrome89",
    minify: false,
    rollupOptions: {
      input: {
        main: "src/main.tsx",
      },
      output: { format: "system" },
    },
  },
  plugins: [
    federation({
      dts: false,
      dev: { remoteHmr: false },
      name: "host",
      remotes: {
        remote: {
          type: "module",
          name: "remote",
          entry: "http://localhost:4174/remoteEntry.js",
          entryGlobalName: "remote",
          shareScope: "default",
        },
      },
      exposes: {},
      filename: "remoteEntry.js",
      shared: {
        // "@mf-vite-example/shared-ui": {
        //   singleton: true,
        // },
        react: {
          requiredVersion: "^19.2.4",
          singleton: true,
        },
        "react-dom": {
          requiredVersion: "^19.2.4",
          singleton: true,
        },
        "react-router": {
          singleton: true,
          requiredVersion: "^7.14.2",
        },
      },
    }),
    react(),
  ],
}));
