import Link from "next/link";
import { Headline } from "./ds/Headline";
import { HorizontalLayout } from "./ds/HorizontalLayout";
import { Text } from "./ds/Text";
import { Layout } from "./Layout";

type Props = {
  post: {
    date: string;
    title: string;
    excerpt: string;
    link: string;
    content: any;
  };
};

export const Post = ({ post }: Props) => {
  const { link, title, date, excerpt, content } = post;
  console.log(post);

  return (
    <Layout>
      <HorizontalLayout space="2rem">
        <Link href={"/blog" + link}>
          <a>
            <Headline element="h5">{title}</Headline>
          </a>
        </Link>
        <Text>{date}</Text>
      </HorizontalLayout>
      <Text fontSize="1.4rem">{excerpt}</Text>
      <article>{content}</article>
    </Layout>
  );
};
