import { FC } from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

type Props = {
  url: string;
  title: string;
};

export const ExternalLink: FC<Props> = ({ url, title }: Props) => {
  return (
    <ChakraLink href={url} target="_blank" rel="noopener noreferrer">
      {title}
      <ExternalLinkIcon mx={2} />
    </ChakraLink>
  );
};
