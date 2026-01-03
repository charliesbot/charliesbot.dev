import { Layout } from "@components/Layout";
import { Box } from "@components/ds/Box";
import { Headline } from "@components/ds/Headline";
import { Text } from "@components/ds/Text";
import { Link } from "@components/ds/Link";

const ContactPage = () => {
  return (
    <Layout
      pageTitle="Contact"
      description="Contact support for Ares RSS reader"
    >
      <Box width="95%">
        <Headline element="h1">Contact Support for Ares</Headline>
        <Text variant="paragraph" fontSize="1.8rem">
          I love hearing from readers! Whether you have questions about the Ares
          RSS reader, you can reach out to me here.
        </Text>
        <Box marginTop="2rem">
          <Text fontSize="1.8rem">
            Email:{" "}
            <Link href="mailto:sudo@charlies.bot">sudo@charlies.bot</Link>
          </Text>
          <br />
          <Text fontSize="1.8rem">
            Developer: Charlie L (
            <Link href="https://twitter.com/charliesbot" target="_blank">
              @charliesbot
            </Link>
            )
          </Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default ContactPage;
