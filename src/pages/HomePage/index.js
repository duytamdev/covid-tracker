import { useEffect, useState } from 'react';
import HomePage from './view';
import ReduxDispatcher from '../../appRedux/ReduxDispatcher';
import Actions from '../../appRedux/actions';

export default function () {
  const [countries, setCountries] = useState([]);
  const fetchCountries = () => {
    const options = {
      callback: (data) => {
        setCountries(data);
      },
    };
    ReduxDispatcher({ ...Actions.getAllCountries(options) });
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  return <HomePage countries={countries} />;
}
