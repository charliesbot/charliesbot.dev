import { PostEntry } from "@components/PostEntry";
import { Layout } from "@components/Layout";
import { Box } from "@components/ds/Box";
import { Headline } from "@components/ds/Headline";

import { posts } from "../getAllPosts";

const IndexPage = () => {
  const sortedDates = [...posts].sort((a, b) =>
    new Date(a.publishedAt) < new Date(b.publishedAt) ? 1 : -1
  );

  return (
    <Layout pageTitle="Charlie's blog" description="" showBackHeader={false}>
      <>
        <Box width="95%">
          <Headline element="h1">
            Hey! I'm Charlie.
            <br />I write about code.
          </Headline>
        </Box>
        {sortedDates.map((post) => (
          <PostEntry key={post.link} frontMatter={post} />
        ))}
      </>
    </Layout>
  );
};

export default IndexPage;
