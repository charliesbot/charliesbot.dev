import React from "react";
import styled from "styled-components";

const HeadlineStyled = styled.span``;

type Props = {
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Headline = (props: Props) => {
  return <HeadlineStyled as={props.element} {...props} />;
};

export { Headline };
