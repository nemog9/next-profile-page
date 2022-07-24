import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import PostType from "../../../interfaces/post";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import remarkGfm from "remark-gfm";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  return (
    <Container p={16}>
      <Heading>{post.title}</Heading>
      <Text>{post.date}</Text>

      <Box mt={16} mb={16}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </Box>
      <Link href="/posts">
        <a>←記事一覧へ戻る</a>
      </Link>
    </Container>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "onImage",
    "coverImage",
  ]);
  const content = post.content;

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default Post;
