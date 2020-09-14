import "../styles/globals.css";

import { ThemeProvider } from "styled-components";
import { Layout } from "../components/Layout";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout pageTitle="Charlie Charlie" description="My site">
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
