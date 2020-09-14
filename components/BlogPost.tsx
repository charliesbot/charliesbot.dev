import { HeadPost, Meta } from "./HeadPost";

type Props = {
  children: React.ReactNode;
  meta: Meta;
};

const BlogPost = ({ children, meta }: Props) => {
  return (
    <>
      <HeadPost meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  );
};

export { BlogPost };
