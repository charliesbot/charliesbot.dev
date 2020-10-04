import { frontMatter as mdxFtw } from "pages/blog/debounce_and_throttle/index.mdx";

const posts = [mdxFtw];

const formatPath = (p: string) => p.replace(/\.mdx$/, "");

export { posts, formatPath };
