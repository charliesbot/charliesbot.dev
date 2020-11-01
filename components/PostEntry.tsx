import Link from "next/link";
import { Link as DSLink } from "./ds/Link";
import { Headline } from "./ds/Headline";
import { VerticalLayout } from "./ds/VerticalLayout";
import { Text } from "./ds/Text";
import { FrontMatter } from "./HeadPost";
import { Spacer } from "./ds/Spacer";

type Props = {
  frontMatter: FrontMatter;
};

const PostEntry = (props: Props) => {
  const { frontMatter } = props;

  const tokens = frontMatter.__resourcePath.split("/");

  const finalUrl = tokens.slice(0, tokens.length - 1).join("/"); // blog/name

  return (
    <VerticalLayout space="0">
      <Link href={finalUrl}>
        <DSLink>
          <Headline element="h5" style={{ marginBottom: 0 }}>
            {frontMatter.title}
          </Headline>
        </DSLink>
      </Link>
      <Spacer vertical="0.8rem" />
      <Text fontSize="1.2rem">{frontMatter.publishedAt}</Text>
      <Text fontSize="1.4rem">{frontMatter.summary}</Text>
    </VerticalLayout>
  );
};

export { PostEntry };
