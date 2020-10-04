import { Box } from "./ds/Box";
import { Headline } from "./ds/Headline";
import { Text } from "./ds/Text";

export type Meta = {
  title: string;
  description: string;
  date: string;
  readTime: string;
};

type Props = {
  meta: Meta;
  isBlogPost?: boolean;
};

const HeadPost = ({ meta }: Props) => (
  <Box marginBottom="6rem">
    <Headline element="h1">{meta.title}</Headline>
    <Text fontFamily="monospace" fontSize="1.4rem">
      {meta.date}
    </Text>
  </Box>
);

export { HeadPost };
