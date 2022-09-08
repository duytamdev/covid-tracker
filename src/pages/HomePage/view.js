import React from 'react';
import './styles.css';
import {
  Card, CardContent, FormControl, MenuItem, Select,
} from '@mui/material';
import InfoBox from './components/InfoBox';
import TableCases from './components/TableCases';

function HomePage({
  countries,
  countrySelected,
  handleCountryChange,
  countryData,
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
          <InfoBox title="Coronavirus cases" cases={countryData?.todayCases} total={countryData?.cases} />
          <InfoBox title="Recovered" cases={countryData?.todayRecovered} total={countryData?.recovered} />
          <InfoBox title="Deaths" cases={countryData?.todayDeaths} total={countryData?.deaths} />
        </div>
      </div>
      <Card className="home-page__right">
        <CardContent>
          <h3>Live cases by country</h3>
          <TableCases countries={countries} />
        </CardContent>
      </Card>

    </div>
  );
}

export default HomePage;
