import type { BunPlugin } from "bun";

export const myLoader: BunPlugin = {
  name: "Custom loader",
  setup(build) {
    build.onLoad({ filter: /\.numbers$/ }, async (args) => {
      const numbers = (await Bun.file(args.path).text()).split(
        "\x20"
      );
      return {
        contents: `export default ${JSON.stringify(numbers)};`,
        loader: "ts",
      };
    });
  },
};
