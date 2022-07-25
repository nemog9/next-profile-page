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
        <LinkList />
        <Heading as="h2" size="md" pt={4}>
          ページ内リンク
        </Heading>
        <Link href="/posts">
          <a>→ブログ記事一覧</a>
        </Link>
        <Link href="/keydown">
          <a>→キーボード入力できるページ</a>
        </Link>
      </VStack>
    </Container>
  );
};

export default Home;
