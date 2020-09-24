import { Box } from "./Box";

type Props = {
  children?: React.ReactNode;
};

const Text = (props: Props) => {
  const { children } = props;
  return (
    <Box as="p" fontSize="1rem">
      {children}
    </Box>
  );
};

export { Text };
