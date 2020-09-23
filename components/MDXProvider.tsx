import { Components, MDXProvider } from "@mdx-js/react";
import { CodeBlock } from "./ds/CodeBlock";
import { Headline } from "./ds/Headline";

const mdComponents: Components = {
  h1: (props) => <Headline element="h1" {...props} />,
  h2: (props) => <Headline element="h2" {...props} />,
  h3: (props) => <Headline element="h3" {...props} />,
  h4: (props) => <Headline element="h4" {...props} />,
  h5: (props) => <Headline element="h5" {...props} />,
  h6: (props) => <Headline element="h6" {...props} />,
  pre: (props) => <>{props.children}</>,
  code: CodeBlock,
};

type Props = {
  children: React.ReactNode;
};

const CustomMDXProvider = ({ children }: Props) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
);

export { CustomMDXProvider as MDXProvider };
