import React, { useEffect, useState } from 'react';
import LineGraph from './view';
import ReduxDispatcher from '../../../../appRedux/ReduxDispatcher';
import Actions from '../../../../appRedux/actions';

export default function () {
  const [data, setData] = useState(null);
  const fetchHistoricalData = () => {
    const options = {
      callback: (res) => {
        setData(res);
      },
    };
    ReduxDispatcher(...Actions.getHistoricalWorldwide({ ...options }));
  };
  useEffect(() => () => {
    fetchHistoricalData();
  }, []);

  return <LineGraph />;
}
