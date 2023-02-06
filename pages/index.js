import { META } from "@/lib/constants";
import { Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>{META.title}</title>
      </Head>
      <Text
        textAlign={"center"}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Hello World
      </Text>
    </>
  );
}
