import { Box } from "./ds/Box";
import { Headline } from "./ds/Headline";
import { Text } from "./ds/Text";

export type FrontMatter = {
  title: string;
  publishedAt: string;
  summary: string;
  __resourcePath: string;
};

type Props = {
  frontMatter: FrontMatter;
};

const HeadPost = ({ frontMatter }: Props) => (
  <Box marginBottom="6rem">
    <Headline element="h1">{frontMatter.title}</Headline>
    <Text fontFamily="monospace" fontSize="1.4rem">
      {frontMatter.publishedAt}
    </Text>
  </Box>
);

export { HeadPost };
