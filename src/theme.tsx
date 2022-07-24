import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      h1: {
        fontSize: "4xl",
        fontWeight: "bold",
      },
      h2: {
        fontSize: "3xl",
        fontWeight: "bold",
      },
      h3: {
        fontSize: "2xl",
        fontWeight: "bold",
      },
      h4: {
        fontSize: "xl",
        fontWeight: "bold",
      },
      p: {
        mt: 4,
      },
    },
  },
});

export default theme;
