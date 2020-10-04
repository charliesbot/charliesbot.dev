import { HeadPost, Meta } from "./HeadPost";
import { Box } from "@components/ds/Box";
import { Layout } from "./Layout";

type Props = {
  content: string;
  meta: Meta;
};

const BlogPost = ({ content, meta }: Props) => {
  return (
    <Layout>
      <HeadPost meta={meta} isBlogPost />
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
};

export { BlogPost };
