import { useEffect, useState } from 'react';
import HomePage from './view';
import ReduxDispatcher from '../../appRedux/ReduxDispatcher';
import Actions from '../../appRedux/actions';

export default function () {
  const [countries, setCountries] = useState([]);
  const [countrySelected, setCountrySelected] = useState('worldwide');
  const [countryData, setCountryData] = useState(null);
  const fetchCountries = () => {
    const options = {
      callback: (data) => {
        const newCountries = data.map((country) => {
          const { cases, country: name, countryInfo } = country;
          const { _id: id, iso2: value } = countryInfo;
          return {
            id,
            name,
            value,
            cases,
          };
        });
        console.log('newCountries', newCountries[0]);
        setCountries(newCountries);
      },
    };
    ReduxDispatcher({ ...Actions.getAllCountries(options) });
  };
  const handleCountryChange = async (event) => {
    const country = event.target.value;
    console.log('country', country);
    setCountrySelected(country);
  };

  const fetchDataCovidByCountry = () => {
    const options = {
      callback: (data) => {
        setCountryData(data);
      },
      country: countrySelected,
    };
    ReduxDispatcher({ ...Actions.getCovidByCountry(options) });
  };
  const fetchDataCovidByWorldwide = () => {
    const options = {
      callback: (data) => {
        setCountryData(data);
      },
    };
    ReduxDispatcher({ ...Actions.getCovidWorldwide(options) });
  };
  useEffect(() => {
    fetchCountries();
    return () => {
    };
  }, []);

  useEffect(() => {
    if (countrySelected === 'worldwide') {
      fetchDataCovidByWorldwide();
    } else {
      fetchDataCovidByCountry();
    }
  }, [countrySelected]);

  return (
    <HomePage
      countryData={countryData}
      handleCountryChange={handleCountryChange}
      countrySelected={countrySelected}
      setCountrySelected={setCountrySelected}
      countries={countries}
    />
  );
}
