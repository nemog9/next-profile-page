import { Container, Heading, VStack, Box } from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import Introduction from "../components/Introduction";
import LinkList from "../components/LinkList";

const Home: NextPage = () => {
  return (
    <Container p={[16, 16]}>
      {/* <Grid templateColumns={["repeat(1, 1fr)", "repeat(5, 1fr)"]}> */}
      {/* <GridItem colSpan={[1, 2]}> */}
      <VStack justify="center" align="center">
        {/* <Box borderRadius="full"> */}
        <ChakraImage
          src="/shamiko.jpeg"
          alt="icon"
          // width={["50%", "20%"]}
          width={20}
          // height={["50%", "20%"]}
          height={20}
          borderRadius="full"
        />
        <Heading as="h2" size="2xl">
          nemoG
        </Heading>
        {/* </Box> */}
      </VStack>
      {/* </GridItem> */}
      {/* <GridItem colSpan={[1, 3]}> */}
      <VStack align="center">
        <Introduction />
        <Box p={4}>
          <Link href="/posts">
            <a>→ブログ記事一覧</a>
          </Link>
        </Box>
        <LinkList />
      </VStack>
      {/* </GridItem> */}
      {/* </Grid> */}
    </Container>
  );
};

export default Home;
