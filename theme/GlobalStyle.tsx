import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html,
body {
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textColor};
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
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
}

li {
  position: relative;
  padding-bottom: 15px;
  font-size: 18px;
}

li:before {
  content: "";
  position: absolute;
  left: -30px;
  top: 8px;
  height: 8px;
  width: 8px;
  background: #78b9d9;
}

`;

export { GlobalStyle };
