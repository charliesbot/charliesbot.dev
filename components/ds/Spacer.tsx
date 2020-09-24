import { Box } from "./Box";

type Props = {
  vertical?: string;
  horizontal?: string;
};

const Spacer = (props: Props) => {
  const { vertical, horizontal } = props;

  return <Box paddingTop={vertical} paddingLeft={horizontal} />;
};

export { Spacer };
