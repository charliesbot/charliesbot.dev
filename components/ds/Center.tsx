import { Box } from "./Box";

type Props = {
  children: React.ReactNode;
};

const Center = (props: Props) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      {props.children}
    </Box>
  );
};

export { Center };
