import Link from "next/link";
import { Headline } from "./ds/Headline";
import { HorizontalLayout } from "./ds/HorizontalLayout";
import { Text } from "./ds/Text";
import { Meta } from "./HeadPost";

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
      <HorizontalLayout space="2rem">
        <Link href={"/blog" + link}>
          <a>
            <Headline element="h5">{meta.title}</Headline>
          </a>
        </Link>
        <Text>{meta.date}</Text>
      </HorizontalLayout>
      <Text fontSize="1.4rem">{meta.description}</Text>
    </article>
  );
};
