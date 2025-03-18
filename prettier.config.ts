import { type Config } from "prettier";

const config: Config = {
  trailingComma: "none",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.ts",
  // Optional: Sort Tailwind classes
  tailwindFunctions: ["clsx", "cn", "classnames"],
};

export default config;
