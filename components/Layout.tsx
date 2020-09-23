import Head from "next/head";
import { Box } from "./ds/Box";
import { NavBar } from "./Header";

type Props = {
  children: React.ReactNode;
  pageTitle: string;
  description: string;
};

const Layout = ({ children, pageTitle, description }: Props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <main>
        <NavBar />
        <Box className="content" width="50vw" margin="0 auto">
          {children}
        </Box>
      </main>
    </>
  );
};

export { Layout };
