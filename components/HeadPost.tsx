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

const HeadPost = ({ meta, isBlogPost }: Props) => (
  <Box marginBottom="1.75rem">
    <Headline element="h1" className={isBlogPost ? "great-title" : ""}>
      {meta.title}
    </Headline>
    <Box className="details" marginTop="-1.4rem">
      {isBlogPost ? null : <Text>{meta.description}</Text>}
      <span>{meta.date}</span>
    </Box>
  </Box>
);

export { HeadPost };
