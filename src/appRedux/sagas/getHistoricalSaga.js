import { takeLatest, call } from 'redux-saga/effects';
import { getGlobalHistoricalAPI } from '@appRedux/api';
import { TYPES_ACTIONS } from '@appRedux/actions';

function* getHistoricalWordWideSaga({ payload }) {
  const { callback = () => {} } = payload;
  try {
    const result = yield call(getGlobalHistoricalAPI);
    yield callback(result.data);
  } catch (error) {
    console.log(error, 'in getHistoricalWordWideSaga');
  }
}

export default function* watchGetHistoricalSaga() {
  yield takeLatest(TYPES_ACTIONS.getHistoricalWorldwide, getHistoricalWordWideSaga);
}
