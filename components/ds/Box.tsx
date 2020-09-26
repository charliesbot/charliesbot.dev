import styled, { CSSObject } from "styled-components";

type CherryPick =
  | "lineHeight"
  | "width"
  | "height"
  | "margin"
  | "padding"
  | "paddingTop"
  | "paddingLeft"
  | "paddingBottom"
  | "paddingRight"
  | "paddingVertical"
  | "paddingHorizontal"
  | "margin"
  | "marginTop"
  | "marginLeft"
  | "marginBottom"
  | "marginRight"
  | "marginVertical"
  | "marginHorizontal"
  | "fontSize";

type Props = Pick<CSSObject, CherryPick> & {
  children?: React.ReactNode;
};

const Box = styled.div<Props>((props) => ({
  lineHeight: props.lineHeight,
  width: props.width,
  height: props.height,
  paddingTop: props.paddingTop,
  paddingRight: props.paddingRight,
  paddingBottom: props.paddingBottom,
  paddingLeft: props.paddingLeft,
  padding: (() => {
    let finalPadding = Array(4).fill("0");
    let hasPadding = false;

    if (props.paddingVertical) {
      hasPadding = true;
      finalPadding[0] = finalPadding[2] = props.paddingVertical;
    }

    if (props.paddingHorizontal) {
      hasPadding = true;
      finalPadding[1] = finalPadding[3] = props.paddingHorizontal;
    }

    if (props.padding) {
      return props.padding;
    }

    return hasPadding ? finalPadding.join(" ") : undefined;
  })(),
  marginTop: props.marginTop,
  marginRight: props.marginRight,
  marginBottom: props.marginBottom,
  marginLeft: props.marginLeft,
  margin: (() => {
    let finalMargin = Array(4).fill("0");
    let hasMargin = false;
    if (props.marginVertical) {
      hasMargin = true;
      finalMargin[0] = finalMargin[2] = props.marginVertical;
    }

    if (props.paddingHorizontal) {
      hasMargin = true;
      finalMargin[1] = finalMargin[3] = props.marginHorizontal;
    }

    if (props.margin) {
      return props.margin;
    }

    return hasMargin ? finalMargin.join(" ") : undefined;
  })(),
  fontSize: props.fontSize,
}));

export { Box };
