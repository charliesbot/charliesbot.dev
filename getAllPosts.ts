// @ts-ignore
import { frontMatter as posts } from "./pages/blog/**/*.mdx";

const formatPath = (p: string) => p.replace(/\.mdx$/, "");

export { posts, formatPath };
