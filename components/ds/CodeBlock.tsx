import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore this theme exists
import { nord as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Box } from "./Box";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const CodeBlock = (props: Props) => {
  const language = props.className?.split("language-")[1] ?? "";

  return (
    <Box marginBottom="5rem">
      <SyntaxHighlighter
        language={language}
        style={theme}
        customStyle={{
          padding: "32px",
          paddingBottom: "20px",
          borderRadius: 5,
          fontSize: "16px",
          background: "rgb(31 36 47)",
        }}
        codeTagProps={{
          style: {
            // @ts-ignore
            fontDisplay: "swap",
            fontFamily: "JetBrains Mono",
          },
        }}
        lineNumberStyle={{
          display: "block",
          width: 32,
          userSelect: "none",
          opacity: 0.3,
          color: "rgb(220, 217, 230)",
        }}
      >
        {props.children}
      </SyntaxHighlighter>
    </Box>
  );
};

export { CodeBlock };
