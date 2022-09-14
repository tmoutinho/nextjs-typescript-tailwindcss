import { Box, Button, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { FaBeer } from 'react-icons/fa';

import ConductiveButton from '../components/button';
import BarChart from '../components/chart/bar-chart';
import LineChart from '../components/chart/line-chart';
import PieChart from '../components/chart/pie-chart';
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

        <Grid templateColumns="1fr 1fr 1fr">
          <div style={{ height: '300px' }}>
            <LineChart
              data={[
                {
                  id: 'germany',
                  data: [
                    {
                      x: 'Page A',
                      y: 167,
                    },
                    {
                      x: 'Page B',
                      y: 166,
                    },
                    {
                      x: 'Page C',
                      y: 33,
                    },
                    {
                      x: 'Page D',
                      y: 141,
                    },
                    {
                      x: 'Page E',
                      y: 93,
                    },
                    {
                      x: 'Page F',
                      y: 220,
                    },
                    {
                      x: 'Page G',
                      y: 11,
                    },
                  ],
                },
                {
                  id: 'norway',
                  data: [
                    {
                      x: 'Page A',
                      y: 250,
                    },
                    {
                      x: 'Page B',
                      y: 183,
                    },
                    {
                      x: 'Page C',
                      y: 128,
                    },
                    {
                      x: 'Page D',
                      y: 3,
                    },
                    {
                      x: 'Page E',
                      y: 114,
                    },
                    {
                      x: 'Page F',
                      y: 211,
                    },
                    {
                      x: 'Page G',
                      y: 278,
                    },
                  ],
                },
              ]}
            />
          </div>
          <div style={{ height: '300px' }}>
            <PieChart />
          </div>
          <div style={{ height: '300px' }}>
            <BarChart />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
