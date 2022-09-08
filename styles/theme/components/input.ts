import { ComponentStyleConfig } from '@chakra-ui/theme';

// in this case we need to extend the base styles

export const Input: ComponentStyleConfig = Object.freeze({
  variants: {
    outline: () => ({
      field: {
        fontSize: '20px',
      },
    }),
  },
});
