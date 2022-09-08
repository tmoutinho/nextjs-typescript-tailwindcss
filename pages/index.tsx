import { Button, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { FaBeer } from 'react-icons/fa';

import ConductiveButton from '../components/button';
import Card from '../components/card';
import ConductiveInput from '../components/input';
import ChakraModal from '../components/modal-chakra';

// we can choose only one lib from react-icons to not overcomplicate

const Home = () => {
  return (
    <div className="">
      <Grid gap="8px">
        <Heading>Chakra</Heading>
        <Text>Buttons</Text>
        <Flex gap="8px" alignItems="center">
          <Button textColor="palette.purple">Button</Button>
          <Button variant="outline" leftIcon={<FaBeer />}>
            Button
          </Button>
          <Button variant="new">New variant</Button>
          <Button variant="new" size="sm">
            New variant small
          </Button>

          <ConductiveButton variant="default" size="md">
            Conductive default Button
          </ConductiveButton>
          <ConductiveButton
            variant="new"
            size="md"
            iconPosition="right"
            icon={<FaBeer />}
          >
            Conductive new Button with right icon
          </ConductiveButton>
          <ChakraModal />
        </Flex>

        <Grid gap="8px">
          <Text>Inputs</Text>

          <ConductiveInput variant="filled" />
          <ConductiveInput variant="outline" />

          <Card />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
