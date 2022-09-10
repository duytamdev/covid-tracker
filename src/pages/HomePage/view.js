import React from 'react';
import './styles.css';
import {
  Card, CardContent, FormGroup, MenuItem, Select,
} from '@mui/material';
import InfoBox from './components/InfoBox';
import TableCases from './components/TableCases';
import LineGraph from './components/LineGraph';
import MapCases from './components/MapCases';
import 'leaflet/dist/leaflet.css';
import { CASE_TYPES } from '../../utils/appConstants';
// eslint-disable-next-line import/order
import { useTranslation } from 'react-i18next';

function HomePage({
  countries,
  countrySelected,
  onChangeCountry,
  countryData,
  mapCenter,
  mapZoom,
  mapCountries,
  onClickChangeTypeCase,
  caseTypeSelected,
  onChangeLanguage,
}) {
  const { t, i18n } = useTranslation();
  const { language: currentLanguage } = i18n;
  return (
    <div className="home-page">
      <div className="home-page__left">
        <div className="home-page__header">
          <h1>{t('title')}</h1>
          <FormGroup>
            <Select
              style={{ marginBottom: '10px' }}
              onChange={onChangeLanguage}
              value={currentLanguage === 'vi' ? 'vi' : 'en'}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="vi">Vietnamese</MenuItem>
            </Select>
            <Select onChange={onChangeCountry} value={countrySelected} variant="outlined">
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <MenuItem value={country.value} key={index}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormGroup>

        </div>
        <div className="home-page__stats">
          <InfoBox isRed active={caseTypeSelected === CASE_TYPES.cases} onClick={() => onClickChangeTypeCase(CASE_TYPES.cases)} title="typeCase.cases" cases={countryData?.todayCases} total={countryData?.cases} />
          <InfoBox active={caseTypeSelected === CASE_TYPES.recovered} onClick={() => onClickChangeTypeCase(CASE_TYPES.recovered)} title="typeCase.recovered" cases={countryData?.todayRecovered} total={countryData?.recovered} />
          <InfoBox isRed active={caseTypeSelected === CASE_TYPES.deaths} onClick={() => onClickChangeTypeCase(CASE_TYPES.deaths)} title="typeCase.deaths" cases={countryData?.todayDeaths} total={countryData?.deaths} />
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
          <h3>{t('liveCases')}</h3>
          <TableCases countries={countries} />
          <LineGraph caseType={caseTypeSelected} />
        </CardContent>
      </Card>
    </div>
  );
}

export default HomePage;
