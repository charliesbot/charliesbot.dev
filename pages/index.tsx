import { PostEntry } from "@components/PostEntry";
import { Layout } from "@components/Layout";
import { Box } from "@components/ds/Box";
import { Headline } from "@components/ds/Headline";

import { posts } from "../getAllPosts";

const IndexPage = () => {
  return (
    <Layout pageTitle="Charlie's blog" description="">
      <>
        <Box width="70%">
          <Headline element="h2">
            Hey! I'm Charlie. I write about code, coffee, books and my life.
          </Headline>
        </Box>
        {posts.map((post) => (
          <PostEntry key={post.link} frontMatter={post} />
        ))}
      </>
    </Layout>
  );
};

export default IndexPage;
