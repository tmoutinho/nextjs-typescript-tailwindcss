import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import { Button } from './components/button';
import { Input } from './components/input';
// components
import { Text } from './components/text';
// config theme foundations
import { breakpoints } from './foundations/breakpoints';
import { colors } from './foundations/colors';
import { fonts } from './foundations/fonts';
import { sizes } from './foundations/sizes';
import { styles } from './styles';

export const config: ThemeConfig = Object.freeze({
  initialColorMode: 'light',
  useSystemColorMode: false,
});

export const theme = extendTheme({
  config,
  styles,
  fonts,
  breakpoints,
  sizes,
  colors,

  // override styles of chakra components
  components: {
    Text,
    Input,
    Button,
  },
});
