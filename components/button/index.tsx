import { Button } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface ConductiveButtonProps {
  variant: 'new' | 'default';
  size: 'sm' | 'md';
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
}

const ConductiveButton = (props: PropsWithChildren<ConductiveButtonProps>) => {
  const { children, variant, size, icon, iconPosition } = props;

  return (
    <Button
      variant={variant}
      size={size}
      leftIcon={icon && iconPosition === 'left' ? icon : undefined}
      rightIcon={icon && iconPosition === 'right' ? icon : undefined}
    >
      {children}
    </Button>
  );
};

export default ConductiveButton;
