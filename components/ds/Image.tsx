import { Box, BoxProps } from "./Box";

type Props = Pick<BoxProps, "width" | "height" | "marginBottom">;

const Image = (props: Props) => {
  return <Box as="img" {...props} />;
};

export { Image };
