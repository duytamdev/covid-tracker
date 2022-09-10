import axios from 'axios';
import { ENV } from '../appConstants';

const API = axios.create({
  baseURL: ENV.REACT_APP_BASE_URL,
});
export default API;
