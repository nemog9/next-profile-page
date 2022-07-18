import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  // Grid,
  // GridItem,
} from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";
import type { NextPage } from "next";
import { ExternalLink } from "../components/ExternalLink";

const Home: NextPage = () => {
  return (
    <Container p={[16, 16]} maxW="1280px">
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
        <Heading>nemoG</Heading>
        {/* </Box> */}
      </VStack>
      {/* </GridItem> */}
      {/* <GridItem colSpan={[1, 3]}> */}
      <VStack align="center">
        <Text>フロントエンドエンジニアです（たぶん）</Text>
        <Box>
          <ExternalLink url="https://twitter.com/nemog9_" title="Twitter" />
        </Box>
        <Box>
          <ExternalLink
            url="https://nemog.hatenablog.com/"
            title="はてなブログ"
          />
        </Box>
        <Box>
          <ExternalLink url="https://github.com/nemog9" title="GitHub" />
        </Box>
        <Box>
          <ExternalLink
            url="https://www.youtube.com/channel/UCw_spPQfZEes2cC-0Q-bkgg"
            title="YouTube"
          />
        </Box>
      </VStack>
      {/* </GridItem> */}
      {/* </Grid> */}
    </Container>
  );
};

export default Home;
