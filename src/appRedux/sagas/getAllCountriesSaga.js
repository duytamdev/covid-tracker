import { call, takeLatest } from 'redux-saga/effects';
import { TYPES_ACTIONS } from '../actions';
import { getAllCountriesAPI } from '../api';

function* getAllCountriesSaga({ payload }) {
  const { callback = () => {} } = payload;
  console.log('run saga get all');
  try {
    const result = yield call(getAllCountriesAPI);
    console.log('result saga', result);
    yield callback(result.data);
  } catch (error) {
    console.log(error, 'in getAllCountriesSaga');
  }
}
export default function* watchGetAllCountries() {
  yield takeLatest(TYPES_ACTIONS.getAllCountries, getAllCountriesSaga);
}
