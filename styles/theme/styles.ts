import { Styles } from '@chakra-ui/theme-tools';

// global styles
export const styles: Styles = {
  global: () => ({
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      fontSize: '16px',
      overflowX: 'hidden',
      maxW: '100vw',
    },
    body: {},
  }),
} as const;
