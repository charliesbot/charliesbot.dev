import { FrontMatter, HeadPost } from "@components/HeadPost";
import { Layout } from "@components/Layout";

type Props = {
  frontMatter: FrontMatter;
  children: React.ReactChildren;
};

const PostLayout = (props: Props) => {
  const { children, frontMatter } = props;

  return (
    <Layout pageTitle={frontMatter.title} description={frontMatter.summary}>
      <HeadPost frontMatter={frontMatter} />
      <article>{children}</article>
    </Layout>
  );
};

export default PostLayout;
