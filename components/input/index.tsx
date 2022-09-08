import { Input } from '@chakra-ui/react';

interface ConductiveInputProps {
  variant: 'outline' | 'filled';
}

const ConductiveInput = (props: ConductiveInputProps) => {
  const { variant } = props;

  return <Input variant={variant} />;
};

export default ConductiveInput;
