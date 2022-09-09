import { useCallback, useEffect, useState } from 'react';
import HomePage from './view';
import ReduxDispatcher from '../../appRedux/ReduxDispatcher';
import Actions from '../../appRedux/actions';
import { CASE_TYPES } from '../../utils/appConstants';

const MAP_CENTER_WORLDWIDE = [34.80746, -40.4796];
export default function () {
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [countrySelected, setCountrySelected] = useState('worldwide');
  const [countryData, setCountryData] = useState(null);
  const [mapCenter, setMapCenter] = useState(MAP_CENTER_WORLDWIDE);
  const [mapZoom, setMapZoom] = useState(1);
  const [caseTypeSelected, setCaseTypeSelected] = useState(CASE_TYPES.cases);
  const handleChangeTypeCase = useCallback(
    (caseType) => {
      setCaseTypeSelected(caseType);
    },
    [],
  );

  const fetchCountries = () => {
    const options = {
      callback: (data) => {
        setMapCountries(data);
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
        setCountries(newCountries);
      },
    };
    ReduxDispatcher({ ...Actions.getAllCountries(options) });
  };
  const handleCountryChange = async (event) => {
    const country = event.target.value;
    setCountrySelected(country);
  };

  const fetchDataCovidByCountry = () => {
    const options = {
      callback: (data) => {
        setCountryData(data);
        setMapCenter([data?.countryInfo.lat, data?.countryInfo.long]);
        setMapZoom(4);
      },
      country: countrySelected,
    };
    ReduxDispatcher({ ...Actions.getCovidByCountry(options) });
  };
  const fetchDataCovidByWorldwide = () => {
    const options = {
      callback: (data) => {
        setCountryData(data);
        setMapCenter(MAP_CENTER_WORLDWIDE);
        setMapZoom(1);
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
      caseTypeSelected={caseTypeSelected}
      onClickChangeTypeCase={handleChangeTypeCase}
      mapCountries={mapCountries}
      mapZoom={mapZoom}
      mapCenter={mapCenter}
      countryData={countryData}
      handleCountryChange={handleCountryChange}
      countrySelected={countrySelected}
      setCountrySelected={setCountrySelected}
      countries={countries}
    />
  );
}
