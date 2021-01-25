// @ts-ignore
import { frontMatter as posts } from "../es/blog/**/*.mdx";
import { PostEntry } from "@components/PostEntry";
import { Layout } from "@components/Layout";
import { Box } from "@components/ds/Box";
import { Headline } from "@components/ds/Headline";

const IndexPage = () => {
  const sortedDates = [...posts].sort((a, b) =>
    new Date(a.publishedAt) < new Date(b.publishedAt) ? 1 : -1
  );

  return (
    <Layout pageTitle="Charlie's blog" description="">
      <>
        <Box width="95%">
          <Headline element="h2">
            Hola! Soy Charlie.
            <br /> Escribo acerca de programación.
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
