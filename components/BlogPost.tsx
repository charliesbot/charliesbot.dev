import { HeadPost, Meta } from "./HeadPost";
import { Box } from "@components/ds/Box";

type Props = {
  children: React.ReactNode;
  meta: Meta;
};

const BlogPost = ({ children, meta }: Props) => {
  return (
    <>
      <HeadPost meta={meta} isBlogPost />
      <Box as="article" marginTop="3.5rem">
        {children}
      </Box>
    </>
  );
};

export { BlogPost };
