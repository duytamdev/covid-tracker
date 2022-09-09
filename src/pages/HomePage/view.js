import React from 'react';
import './styles.css';
import {
  Card, CardContent, FormControl, MenuItem, Select,
} from '@mui/material';
import InfoBox from './components/InfoBox';
import TableCases from './components/TableCases';
import LineGraph from './components/LineGraph';
import MapCases from './components/MapCases';
import 'leaflet/dist/leaflet.css';
import { CASE_TYPES } from '../../utils/appConstants';

function HomePage({
  countries,
  countrySelected,
  handleCountryChange,
  countryData,
  mapCenter,
  mapZoom,
  mapCountries,
  onClickChangeTypeCase,
  caseTypeSelected,
}) {
  return (
    <div className="home-page">
      <div className="home-page__left">
        <div className="home-page__header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="home-page__form-control">
            <Select onChange={handleCountryChange} value={countrySelected} variant="outlined">
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value} key={country.id}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="home-page__stats">
          <InfoBox isRed active={caseTypeSelected === CASE_TYPES.cases} onClick={() => onClickChangeTypeCase(CASE_TYPES.cases)} title="Coronavirus cases" cases={countryData?.todayCases} total={countryData?.cases} />
          <InfoBox active={caseTypeSelected === CASE_TYPES.recovered} onClick={() => onClickChangeTypeCase(CASE_TYPES.recovered)} title="Recovered" cases={countryData?.todayRecovered} total={countryData?.recovered} />
          <InfoBox isRed active={caseTypeSelected === CASE_TYPES.deaths} onClick={() => onClickChangeTypeCase(CASE_TYPES.deaths)} title="Deaths" cases={countryData?.todayDeaths} total={countryData?.deaths} />
        </div>
        <MapCases
          countries={mapCountries}
          casesType={caseTypeSelected}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>
      <Card className="home-page__right">
        <CardContent>
          <h3>Live cases by country</h3>
          <TableCases countries={countries} />
          <LineGraph caseType={caseTypeSelected} />
        </CardContent>

      </Card>

    </div>
  );
}

export default HomePage;
