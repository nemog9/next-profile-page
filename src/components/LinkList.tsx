import { Box, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { ExternalLink } from "./ExternalLink";

const LinkList: FC = () => {
  return (
    <>
      <Heading as="h2" size="md">
        リンク
      </Heading>
      <ExternalLink url="https://twitter.com/nemog9_" title="Twitter" />
      <ExternalLink url="https://nemog.hatenablog.com/" title="はてなブログ" />
      <ExternalLink url="https://github.com/nemog9" title="GitHub" />
      <ExternalLink
        url="https://www.youtube.com/channel/UCw_spPQfZEes2cC-0Q-bkgg"
        title="YouTube"
      />
      <ExternalLink url="https://note.com/nemog9" title="note" />
    </>
  );
};

export default LinkList;
