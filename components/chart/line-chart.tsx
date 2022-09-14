import { LineSvgProps, ResponsiveLine, Serie } from '@nivo/line';

interface LineChartProps extends LineSvgProps {
  data: Serie[];
}

const LineChart = (props: LineChartProps) => {
  const { data, ...rest } = props;

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={
        {
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'xAxix',
          legendOffset: 36,
          legendPosition: 'middle',
        } as any
      }
      axisLeft={
        {
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'yAxis',
          legendOffset: -40,
          legendPosition: 'top',
        } as any
      }
      lineWidth={3}
      pointColor="#fffafa"
      pointBorderWidth={2}
      pointBorderColor={{ theme: 'background' }}
      pointLabelYOffset={-12}
      useMesh={true}
      areaOpacity={0.5}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      enableArea={true}
      colors={{ scheme: 'set1' }}
      enableGridX={false}
      enableGridY={false}
      {...rest}
    />
  );
};

export default LineChart;
