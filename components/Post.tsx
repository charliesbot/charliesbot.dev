import Link from "next/link";
import { HeadPost, Meta } from "./HeadPost";

type Props = {
  post: {
    link: string;
    module: {
      meta: Meta;
    };
  };
};

export const Post = ({ post }: Props) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <article>
      <HeadPost meta={meta} />
      <Link href={"/blog" + link}>
        <a>Read more →</a>
      </Link>
    </article>
  );
};
