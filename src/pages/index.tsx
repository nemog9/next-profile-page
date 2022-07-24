import { Container, Heading, VStack, Box } from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import Introduction from "../components/Introduction";
import LinkList from "../components/LinkList";

const Home: NextPage = () => {
  return (
    <Container p={[16, 16]}>
      <VStack justify="center" align="center">
        <ChakraImage
          src="/profile.jpg"
          alt="icon"
          width={20}
          height={20}
          borderRadius="full"
        />
        <Heading as="h2" size="2xl">
          nemoG
        </Heading>
      </VStack>
      <VStack>
        <Introduction />
        <Box p={4}>
          <Link href="/posts">
            <a>→ブログ記事一覧</a>
          </Link>
        </Box>
        <LinkList />
      </VStack>
    </Container>
  );
};

export default Home;
