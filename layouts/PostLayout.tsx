import format from "date-fns/format";
import { Layout } from "@components/Layout";
import { Box } from "@components/ds/Box";
import { Headline } from "@components/ds/Headline";
import { Text } from "@components/ds/Text";

export type FrontMatter = {
  title: string;
  publishedAt: string;
  summary: string;
  __resourcePath: string;
};

type Props = {
  frontMatter: FrontMatter;
  children: React.ReactChildren;
};

const PostLayout = (props: Props) => {
  const { children, frontMatter } = props;

  return (
    <Layout pageTitle={frontMatter.title} description={frontMatter.summary}>
      <Box marginBottom="6rem">
        <Headline element="h1">{frontMatter.title}</Headline>
        <Text fontFamily="monospace" fontSize="1.4rem">
          {format(new Date(frontMatter.publishedAt), "MMM dd, yyyy")}
        </Text>
      </Box>
      <article>{children}</article>
    </Layout>
  );
};

export default PostLayout;
