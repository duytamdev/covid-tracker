import React, { useEffect, useState } from 'react';
import LineGraph from './view';
import Actions from '../../../../appRedux/actions';
import ReduxDispatcher from '../../../../appRedux/ReduxDispatcher';

export default function ({ caseType }) {
  const [dataChart, setDataChart] = useState(null);
  const [dataAllCase, setDataAllCase] = useState(null);
  const buildChartData = (data, casesType = 'cases') => {
    const chartData = [];
    let lastDataPoint;
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const date in data.cases) {
      if (lastDataPoint !== undefined) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }

    return chartData;
  };
  const fetchHistoricalData = () => {
    const options = {
      callback: (res) => {
        setDataAllCase(res);
        setDataChart(buildChartData(res, caseType));
      },
    };
    ReduxDispatcher({ ...Actions.getHistoricalWorldwide({ ...options }) });
  };

  useEffect(() => () => {
    fetchHistoricalData();
  }, []);

  useEffect(() => {
    if (dataAllCase) {
      console.log('dataAllCase', dataAllCase);
      setDataChart(buildChartData(dataAllCase, caseType));
    }
  }, [caseType]);

  return <LineGraph caseType={caseType} dataChart={dataChart} />;
}
