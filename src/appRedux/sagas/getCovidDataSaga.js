import { takeLatest, call } from 'redux-saga/effects';
import { getCovidDataByCountryAPI, getCovidDataWordWideAPI } from '../api';
import { TYPES_ACTIONS } from '../actions';

function* getCovidWorldwideSaga({ payload }) {
  const { callback = () => {} } = payload;
  try {
    const result = yield call(getCovidDataWordWideAPI);
    yield callback(result.data);
  } catch (error) {
    console.log(error, 'in getCovidWorldwideSaga');
  }
}

function* getCovidCountrySaga({ payload }) {
  console.log('run saga get covid country');
  const { callback = () => {}, country } = payload;
  try {
    const result = yield call(getCovidDataByCountryAPI, country);
    yield callback(result.data);
  } catch (error) {
    console.log(error, 'in getCovidCountrySaga');
  }
}

export default function* watchGetCovidData() {
  yield takeLatest(TYPES_ACTIONS.getCovidDataWorldwide, getCovidWorldwideSaga);
  yield takeLatest(TYPES_ACTIONS.getCovidDataCountry, getCovidCountrySaga);
}
