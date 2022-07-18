import { ColorModeScript } from "@chakra-ui/react";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import theme from "../theme";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// const MyDocument = () => {
//   return (
//     <Html lang="ja">
//       <Head />
//       <body>
//         <ColorModeScript initialColorMode="dark" />
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// };

export default MyDocument;
