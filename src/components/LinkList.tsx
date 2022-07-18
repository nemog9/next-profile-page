import { Box, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { ExternalLink } from "./ExternalLink";

const LinkList: FC = () => {
  return (
    <>
      <Heading as="h2" size="md">
        リンク
      </Heading>
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
    </>
  );
};

export default LinkList;
