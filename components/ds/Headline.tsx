import styled from "styled-components";

type Props = {
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};

type FontSizeProp = {
  [k in Props["element"]]: string;
};

const FontSizeConfig: FontSizeProp = {
  h1: "2.625rem",
  h2: "1.75rem",
  h3: "1.3125rem",
  h4: "1.125rem",
  h5: "1rem",
  h6: "0.875rem",
};

const HeadlineStyled = styled.span<Props>((props) => {
  return {
    marginTop: "3.5rem",
    marginBottom: "1.75rem",
    fontFamily: "Merriweather",
    fontSize: FontSizeConfig[props.element],
  };
});

const Headline = (props: Props) => {
  return <HeadlineStyled as={props.element} {...props} />;
};

export { Headline };
