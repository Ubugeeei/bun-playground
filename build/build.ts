const result = await Bun.build({
  entrypoints: ["./index.tsx"],
  outdir: './dist2',
});
