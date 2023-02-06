import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Text, Link, useColorMode, Spacer } from "@chakra-ui/react";

export default function Footer() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-around"
      p={6}
      bg={colorMode === "light" ? "gray.50" : "gray.800"}
      mt="auto"
    >
      <Text fontSize="sm">Made by @PTRFRLL</Text>
      <Link fontSize="sm" href={"https://github.com/PTRFRLL/nextjs-chakra-boilerplate"} isExternal>
        Github <ExternalLinkIcon mx="2px" />
      </Link>
    </Flex>
  );
}
