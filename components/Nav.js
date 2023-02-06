import { useRouter } from "next/router";
import { default as NextLink } from "next/link";
import React from "react";
import {
  Button,
  Flex,
  Box,
  IconButton,
  useColorMode,
  Link,
  useDisclosure,
  useColorModeValue,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon, HamburgerIcon, MoonIcon, SettingsIcon, SunIcon, UnlockIcon } from "@chakra-ui/icons";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
];

const NavLink = ({ children, href }) => (
  <Link
    as={NextLink}
    href={href}
    px={4}
    py={3}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ sm: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg={useColorModeValue("gray.100", "gray.900")}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack as={"nav"} spacing={4} display={{ base: "none", sm: "flex" }}>
              {links.map((link) => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button
                bg={useColorModeValue("gray.100", "gray.900")}
                title="Toggle Color Mode"
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ sm: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links.map((link) => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
