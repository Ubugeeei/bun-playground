import { myLoader } from "./my-loader";

Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./out",
  plugins: [myLoader],
});
