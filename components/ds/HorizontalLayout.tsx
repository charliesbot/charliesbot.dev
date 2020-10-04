import { CSSProperties } from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  space: string;
  alignItems?: CSSProperties["alignItems"];
};

const HorizontalLayoutStyled = styled.div<Props>`
  display: flex;
  align-items: ${(props) => props.alignItems};

  * + * {
    margin-left: ${(props) => props.space};
  }
`;

const HorizontalLayout = (props: Props) => {
  const { children, space, alignItems = "center" } = props;
  return (
    <HorizontalLayoutStyled space={space} alignItems={alignItems}>
      {children}
    </HorizontalLayoutStyled>
  );
};

export { HorizontalLayout };
