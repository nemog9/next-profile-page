---
title: このアプリケーションをより良くするために
date: "2022-07-24"
---

## このアプリケーションをより良くするためにやること

- [x] 今は `<div dangerousInnerHTML={post.content} />` になっているので、react-markdown でレンダリングできるようにする
- [x] react-markdown でコードのハイライトもできるようにする
- [ ] ファイル名を表示できるようにする

```tsx
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import PostType from "../../../interfaces/post";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CodeComponent } from "react-markdown/lib/ast-to-react";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  const CodeBlock: CodeComponent = ({
    inline,
    className,
    children,
    ...props
  }) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        // TODO: ここのエラーを消したい
        style={darcula}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  };
  return (
    <Container p={16}>
      <Heading>{post.title}</Heading>
      <Text>{post.date}</Text>

      <Box mt={16} mb={16}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{ code: CodeBlock }}
        >
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

```
