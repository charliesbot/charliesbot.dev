export async function getStaticPaths() {
  const posts = await getAllPosts();

  const slugs = posts.map((post) => ({
    params: { post: post.frontmatter.slug },
  }));

  const uniqueSlugs = new Set(posts.map((post) => post.frontmatter.slug));

  if (uniqueSlugs.size !== posts.length) {
    console.error("Slugs are not unique!");
    process.exit(1);
  }

  return {
    paths: slugs,
    fallback: false,
  };
}
