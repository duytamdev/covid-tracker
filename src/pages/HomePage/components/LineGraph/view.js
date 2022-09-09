import React from 'react';
import './index.css';
import { Line } from 'react-chartjs-2';
import { optionsLineGraph } from '../../../../utils/helper';

function LineGraph({ dataChart, caseType }) {
  return (
    <div className="line-graph">
      <h3 className="line-graph__title">
        WorkWide new
        {' '}
        {caseType}
      </h3>
      {dataChart?.length > 0 && (
      <Line
        data={{
          datasets: [
            {
              labels: 'Cases',
              backgroundColor: 'rgba(204, 16, 52, 0.5)',
              borderColor: '#CC1034',
              data: dataChart,
            },
          ],
        }}
        options={optionsLineGraph}
      />
      )}
    </div>
  );
}

export default LineGraph;
