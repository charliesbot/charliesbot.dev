const images = require("remark-images");
const emoji = require("remark-emoji");
const detectFrontmatter = require("remark-frontmatter");
const visit = require("unist-util-visit");
const remove = require("unist-util-remove");
const builder = require("unist-builder");
const yaml = require("yaml");

function extractFrontmatter() {
  return (tree, file) => {
    visit(tree, "yaml", (node) => {
      file.data.frontmatter = yaml.parse(node.value);
    });
    remove(tree, "yaml");
  };
}

function exportFrontmatter() {
  return (tree, file) => {
    const value = JSON.stringify(file.data.frontmatter, null, 2);
    const frontmatter = builder(
      "export",
      `export const frontmatter = ${value}`
    );
    tree.children = [frontmatter, ...tree.children];
  };
}

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      detectFrontmatter,
      extractFrontmatter,
      exportFrontmatter,
      images,
      emoji,
    ],
  },
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
