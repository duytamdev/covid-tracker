import { all, fork } from 'redux-saga/effects';
import watchGetAllCountries from './getAllCountriesSaga';

export default function* rootSaga() {
  yield all([
    fork(watchGetAllCountries),
  ]);
}
