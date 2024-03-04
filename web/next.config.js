/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui", "@repo/app-media-converter", "@repo/app-memo"],
  output: "export",
};
