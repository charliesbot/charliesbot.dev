import "../styles/globals.css";

import { AppComponent } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";
import { MDXProvider } from "@components/MDXProvider";
import { GlobalStyle } from "../theme/GlobalStyle";
import { theme } from "../theme/theme";

const App: AppComponent = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme.darkTheme}>
      <GlobalStyle />
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;
