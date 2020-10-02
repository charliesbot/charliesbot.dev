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
  h1: "5rem",
  h2: "3.6rem",
  h3: "3rem",
  h4: "2.5rem",
  h5: "2rem",
  h6: "2rem",
};

const HeadlineStyled = styled.span<Props>((props) => {
  return {
    marginTop: "3.5rem",
    marginBottom: "0.4em",
    lineHeight: "1.32",
    fontFamily: "Merriweather",
    fontSize: FontSizeConfig[props.element],
  };
});

const Headline = (props: Props) => {
  return <HeadlineStyled as={props.element} {...props} />;
};

export { Headline };
