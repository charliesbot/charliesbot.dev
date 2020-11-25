import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`

html,
body {
  font-size: 10px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textColor};
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

body {
  letter-spacing: .01rem;
}

a {

  color:${() => theme.colors.lightBlue};
}

* {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

p {
  margin: 0;
}

ul {
  list-style: none;
  padding: 15px 0px 30px 30px;
  margin: 0;
}

li {
  font-size: 1.8rem;
  position: relative;
  padding-bottom: 15px;
}

li:before {
  content: "";
  position: absolute;
  left: -30px;
  top: 7px;
  height: 8px;
  width: 8px;
  background: #78b9d9;
}

`;

export { GlobalStyle };
