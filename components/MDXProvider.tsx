import { Components, MDXProvider } from "@mdx-js/react";
import { Box } from "./ds/Box";
import { CodeBlock } from "./ds/CodeBlock";
import { Headline } from "./ds/Headline";
import { Text } from "./ds/Text";

const mdComponents: Components = {
  h1: (props) => <Headline element="h1" {...props} />,
  h2: (props) => <Headline element="h2" {...props} />,
  h3: (props) => <Headline element="h3" {...props} />,
  h4: (props) => <Headline element="h4" {...props} />,
  h5: (props) => <Headline element="h5" {...props} />,
  h6: (props) => <Headline element="h6" {...props} />,
  pre: (props) => <>{props.children}</>,
  p: (props) => (
    <Box marginBottom="1.75rem">
      <Text>{props.children}</Text>
    </Box>
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
