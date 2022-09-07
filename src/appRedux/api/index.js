import API from '../../utils/apiConfig';

const getAllCountriesAPI = () => API.get('/v3/covid-19/countries');
const getCovidDataByCountryAPI = (country) => API.get(`/v3/covid-19/countries/${country}`);

export { getAllCountriesAPI, getCovidDataByCountryAPI };
