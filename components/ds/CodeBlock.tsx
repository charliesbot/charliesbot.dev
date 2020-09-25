import SyntaxHighlighter from "react-syntax-highlighter";
// @ts-ignore this theme exists
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const CodeBlock = (props: Props) => {
  const language = props.className?.split("language-")[1] ?? "";

  return (
    <SyntaxHighlighter
      language={language}
      style={nightOwl}
      customStyle={{
        padding: "32px",
        paddingBottom: "20px",
        borderRadius: 5,
        fontSize: "16px",
        background: "#292c34",
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
  );
};

export { CodeBlock };
