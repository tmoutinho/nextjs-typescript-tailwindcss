import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { theme as defaultTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={defaultTheme} resetCSS={false}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
