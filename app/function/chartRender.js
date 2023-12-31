import { useEffect, useState } from 'react';
import { Sparklines, SparklinesLine, SparklinesNormalBand, SparklinesReferenceLine } from 'react-sparklines';

const ChartRender = ({ data, units }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const calculateFiveDay = (data) => {
    return Math.round(data.reduce((accumulator, currentValue) => accumulator + currentValue / data.length, 0));

  };

  return (
    <div className="render-chart">
      {isClient && (
        <>
          <Sparklines data={data}>
            <SparklinesLine style={{ stroke: 'blue', fill: 'none'}} />
            <SparklinesNormalBand style={{ fill: 'rgba(0, 0, 255, 0.2)' }} />
            <SparklinesReferenceLine type='mean' />
          </Sparklines>
          <span>{calculateFiveDay(data)} {units}</span>
        </>
      )}
    </div>
  );
};

export default ChartRender;