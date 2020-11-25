import Head from "next/head";
import { Box } from "./ds/Box";
import { BackHeader } from "./BackHeader";

type Props = {
  children: React.ReactNode;
  pageTitle: string;
  description: string;
};

const Layout = ({ children, description }: Props) => {
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
          <BackHeader />
          {children}
        </Box>
      </main>
    </>
  );
};

export { Layout };
