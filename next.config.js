const images = require("remark-images");
const emoji = require("remark-emoji");

const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced({
  fileExtensions: ["mdx"],
  remarkPlugins: [images, emoji],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: "prebuild|loader|both",
  },
  reExportDataFetching: false,
})();
