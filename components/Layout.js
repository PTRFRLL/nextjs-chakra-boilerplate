import Meta from "./Meta";
import Nav from "./Nav";
import { Box, Container, useColorMode } from "@chakra-ui/react";
import Footer from "./Footer";

export default function Layout({ children }) {
  const { colorMode } = useColorMode();
  return (
    <Box minH="100vh" bg={colorMode === "light" ? "gray.50" : "gray.800"}>
      <Meta />
      <Nav />
      <Box minH={"calc(100vh - 135px)"} p={6}>
        <Container maxW={"5xl"}>{children}</Container>
      </Box>
      <Footer />
    </Box>
  );
}
