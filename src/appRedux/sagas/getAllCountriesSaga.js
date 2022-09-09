import { call, takeLatest } from 'redux-saga/effects';
import { getAllCountriesAPI } from '../api';
import { TYPES_ACTIONS } from '../actions';

function* getAllCountriesSaga({ payload }) {
  const { callback = () => {} } = payload;
  try {
    const result = yield call(getAllCountriesAPI);
    yield callback(result.data);
  } catch (error) {
    console.log(error, 'in getAllCountriesSaga');
  }
}
export default function* watchGetAllCountries() {
  yield takeLatest(TYPES_ACTIONS.getAllCountries, getAllCountriesSaga);
}
