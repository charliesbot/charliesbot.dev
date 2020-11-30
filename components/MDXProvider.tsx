import { Components, MDXProvider } from "@mdx-js/react";
import { CodeBlock } from "./ds/CodeBlock";
import { Headline } from "./ds/Headline";
import { Image } from "./ds/Image";
import { MarkdownLink } from "./ds/MarkdownLink";
import { Text } from "./ds/Text";

const consistenMargin = "2.5rem";

const mdComponents: Components = {
  a: (props) => <MarkdownLink {...props} />,
  h1: (props) => <Headline element="h1" {...props} />,
  h2: (props) => <Headline element="h2" {...props} />,
  h3: (props) => <Headline element="h3" {...props} />,
  h4: (props) => <Headline element="h4" {...props} />,
  h5: (props) => <Headline element="h5" {...props} />,
  h6: (props) => <Headline element="h6" {...props} />,
  pre: (props) => <>{props.children}</>,
  img: (props) => (
    <Image {...props} marginBottom={consistenMargin} width="100%" />
  ),
  p: (props) => (
    <Text marginBottom={consistenMargin} variant="paragraph">
      {props.children}
    </Text>
  ),
  code: CodeBlock,
};

type Props = {
  children: React.ReactNode;
};

const CustomMDXProvider = ({ children }: Props) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
);

export { CustomMDXProvider as MDXProvider };
