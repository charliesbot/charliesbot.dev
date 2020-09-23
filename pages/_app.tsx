import "../styles/globals.css";

import { AppComponent } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";
import { MDXProvider } from "@components/MDXProvider";
import { GlobalStyle } from "../theme/GlobalStyle";
import { Layout } from "../components/Layout";
import { darkTheme } from "../theme/theme";

const App: AppComponent = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <MDXProvider>
        <Layout pageTitle="Charlie Charlie" description="My site">
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;
