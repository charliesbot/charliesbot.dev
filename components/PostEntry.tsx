import Link from "next/link";
import { Headline } from "./ds/Headline";
import { HorizontalLayout } from "./ds/HorizontalLayout";
import { VerticalLayout } from "./ds/VerticalLayout";
import { Text } from "./ds/Text";
import { FrontMatter } from "./HeadPost";

type Props = {
  frontMatter: FrontMatter;
};

const PostEntry = (props: Props) => {
  const { frontMatter } = props;

  return (
    <VerticalLayout>
      <HorizontalLayout space="2rem">
        <Link href={"/blog" + frontMatter.__resourcePath}>
          <a>
            <Headline element="h5">{frontMatter.title}</Headline>
          </a>
        </Link>
        <Text>{frontMatter.publishedAt}</Text>
      </HorizontalLayout>
      <Text fontSize="1.4rem">{frontMatter.summary}</Text>
    </VerticalLayout>
  );
};

export { PostEntry };
