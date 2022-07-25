import { Box, Container, Heading, Spinner, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const KeyDown = () => {
  const [code, setCode] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      setCode(code + e.key);
    };
    document.addEventListener("keydown", keyDownHandler);

    // password と入力したときに隠しページへ遷移
    if (code === "password") {
      // loading アニメーション
      setLoading(true);
      setTimeout(() => {
        // 隠しページへ遷移する
        router.push("/secretPage");
      }, 2000);
    }

    // clean up
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [code, router]);

  return (
    <Container pt={16}>
      {!loading && (
        <Heading size="lg">
          このページはキーボードで入力したテキストが表示されます！（英数のみ）
        </Heading>
      )}
      <VStack justify="center" minH={600}>
        {!loading && <Heading size="xl">{code}</Heading>}
        {loading && (
          <Spinner
            size="xl"
            emptyColor="gray.200"
            color="blue.500"
            thickness="2px"
          />
        )}
      </VStack>
    </Container>
  );
};

export default KeyDown;
