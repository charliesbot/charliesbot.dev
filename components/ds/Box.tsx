import styled, { CSSObject } from "styled-components";

type CherryPick = "width" | "height" | "margin";

type Props = Pick<CSSObject, CherryPick> & {
  children: React.ReactNode;
};

const Box = styled.div<Props>((props) => ({
  width: props.width,
  height: props.height,
  margin: props.margin,
}));

export { Box };
