import API from '../../utils/apiConfig';

const getAllCountriesAPI = () => API.get('/v3/covid-19/countries');
const getCovidDataByCountryAPI = (country) => API.get(`/v3/covid-19/countries/${country}`);
const getCovidDataWordWideAPI = () => API.get('/v3/covid-19/all');
const getGlobalHistoricalAPI = () => API.get('/v3/covid-19/historical/all?lastdays=12');
export {
  getAllCountriesAPI,
  getCovidDataByCountryAPI,
  getCovidDataWordWideAPI,
  getGlobalHistoricalAPI,
};
