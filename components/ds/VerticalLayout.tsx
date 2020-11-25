import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  space: string;
};

const VerticalLayoutStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  * + * {
    margin-top: ${(props) => props.space};
  }
`;

const VerticalLayout = ({ children, space }: Props) => {
  return <VerticalLayoutStyled space={space}>{children}</VerticalLayoutStyled>;
};

export { VerticalLayout };
