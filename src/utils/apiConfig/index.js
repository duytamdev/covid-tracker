import axios from 'axios';

const API = axios.create({
  baseURL: 'https://disease.sh',
});
export default API;
