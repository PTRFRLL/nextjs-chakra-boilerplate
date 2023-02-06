import { META } from "@/lib/constants";
import { Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>{META.title} | About</title>
      </Head>
      <Heading>About</Heading>
    </>
  );
}
