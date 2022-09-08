import { ComponentStyleConfig } from '@chakra-ui/theme';

// Create several variants for button
export const Button: ComponentStyleConfig = Object.freeze({
  variants: {
    new: () => ({
      background: 'palette.red',
      color: 'palette.white',
    }),
    default: () => ({
      background: 'palette.secondary',
      color: 'palette.white',
    }),
  },
});
