import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Post from "../../../interfaces/post";
import { getAllPosts } from "../../../lib/api";

type Props = {
  allPosts: Post[];
};

const BlogList = ({ allPosts }: Props) => {
  return (
    <Container p={8} maxW='container.xl' >
      <Heading>記事一覧</Heading>
      <Box mt={16} mb={16}>
        {allPosts.map(({ title, date, slug }) => {
          return (
            <Link
              href={{ pathname: "/posts/[slug]", query: { slug: slug } }}
              key={slug}
            >
              <a>
                <Heading as="h3" size="md" mt={8}>
                  {title}
                </Heading>
                <Text mt={0}>{date}</Text>
              </a>
            </Link>
          );
        })}
      </Box>
      <Link href="/">
        <a>←ホームへ戻る</a>
      </Link>
    </Container>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "except",
  ]);

  return {
    props: { allPosts },
  };
};

export default BlogList;
