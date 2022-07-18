import { Icon, Text } from "@chakra-ui/react";
import { FC } from "react";
import { GoLocation } from "react-icons/go";

const Introduction: FC = () => {
  return (
    <>
      <Text my={2}>フロントエンドエンジニアです（たぶん）</Text>
      <Text my={2}>
        <Icon as={GoLocation} />
        Tokyo
      </Text>
      <Text as="i">
        原神 / Fujifilm X-S10 / VTuber / チェンソーマン / CeVIO / Apple / Future
        Bass / インターネット
      </Text>
    </>
  );
};

export default Introduction;
