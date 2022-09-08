import { all, fork } from 'redux-saga/effects';
import watchGetAllCountries from './getAllCountriesSaga';
import watchGetCovidData from './getCovidDataSaga';
import watchGetHistoricalSaga from './getHistoricalSaga';

export default function* rootSaga() {
  yield all([
    fork(watchGetAllCountries),
    fork(watchGetCovidData),
    fork(watchGetHistoricalSaga),
  ]);
}
