import "../styles/globals.css";

import { AppComponent } from "next/dist/next-server/lib/router/router";
import { GlobalStyle } from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Layout } from "../components/Layout";
import { darkTheme } from "../theme/theme";

const App: AppComponent = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Layout pageTitle="Charlie Charlie" description="My site">
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
