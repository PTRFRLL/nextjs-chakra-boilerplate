import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <NextNProgress options={{ showSpinner: false }} />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
