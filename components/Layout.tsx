import Head from "next/head";
import { Box } from "./ds/Box";
import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
  pageTitle: string;
  description: string;
};

const Layout = (props: Props) => {
  const { children, description } = props;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
      </Head>
      <main>
        <Box
          className="content"
          width="80%"
          maxWidth="800px"
          margin="0 auto"
          paddingVertical="8rem"
        >
          <Navbar />
          {children}
        </Box>
      </main>
    </>
  );
};

export { Layout };
