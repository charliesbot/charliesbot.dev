import { Box, BoxProps } from "./Box";

type Variant = "inline" | "paragraph";

type Props = Pick<BoxProps, "fontSize" | "fontFamily" | "marginBottom"> & {
  children?: React.ReactNode;
  variant?: Variant;
};

const Text = (props: Props) => {
  const {
    children,
    variant = "inline",
    fontSize = "1.8rem",
    fontFamily,
    marginBottom,
  } = props;
  const htmlElement = variant === "paragraph" ? "p" : "span";

  return (
    <Box
      as={htmlElement}
      fontSize={fontSize}
      fontFamily={fontFamily ?? "inherit"}
      lineHeight="1.5em"
      marginBottom={marginBottom}
    >
      {children}
    </Box>
  );
};

export { Text };
