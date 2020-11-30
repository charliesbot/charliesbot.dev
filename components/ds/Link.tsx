import styled from "styled-components";
import { theme } from "theme/theme";

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #59c5fb;
    text-decoration: underline;
  }
`;

const FancyLink = styled.a`
  cursor: pointer;
  color: ${theme.colors.lightBlue};
  text-decoration: none;
  background-size: 100% 1.4px;
  background-repeat: no-repeat;
  background-position: 0 1.3em;
  transition: color 0.2s ease-out, background-position 0.1s,
    background-size 0.1s;
  background-image: linear-gradient(
    to bottom,
    ${theme.colors.lightBlue} 0%,
    ${theme.colors.lightBlue} 100%
  );

  &:hover {
    color: white;
    background-size: 100% 1.1em;
    background-position: 0 0.15em;
  }
`;

export { Link, FancyLink };
