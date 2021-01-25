import styled, { CSSObject } from "styled-components";

type CherryPick =
  | "display"
  | "alignItems"
  | "justifyContent"
  | "lineHeight"
  | "width"
  | "maxWidth"
  | "height"
  | "maxHeight"
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
  | "fontSize"
  | "fontFamily";

export type BoxProps = Partial<Pick<CSSObject, CherryPick>> & {
  children?: React.ReactNode;
};

const Box = styled.div<BoxProps>((props) => ({
  display: props.display,
  alignItems: props.alignItems,
  justifyContent: props.justifyContent,
  lineHeight: props.lineHeight,
  fontSize: props.fontSize,
  fontFamily: props.fontFamily,
  width: props.width,
  maxWidth: props.maxWidth,
  height: props.height,
  maxHeight: props.maxHeight,
  paddingTop: props.paddingTop,
  paddingRight: props.paddingRight,
  paddingBottom: props.paddingBottom,
  paddingLeft: props.paddingLeft,
  padding: (() => {
    let finalPadding = Array(4).fill("0");
    let hasPadding = false;

    if (props.padding) {
      return props.padding;
    }

    if (props.paddingVertical) {
      hasPadding = true;
      finalPadding[0] = finalPadding[2] = props.paddingVertical;
    }

    if (props.paddingHorizontal) {
      hasPadding = true;
      finalPadding[1] = finalPadding[3] = props.paddingHorizontal;
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
}));

export { Box };
