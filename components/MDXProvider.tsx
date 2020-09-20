import React from "react";
import { Components, MDXProvider } from "@mdx-js/react";

const mdComponents: Components = {
  h1: (props) => <h1 style={{ color: "green" }} {...props} />,
};

const CustomMDXProvider = ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
);

export { CustomMDXProvider as MDXProvider };
