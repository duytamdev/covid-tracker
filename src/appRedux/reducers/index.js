import { combineReducers } from 'redux';
import testReducer from './TestReducer';

const rootReducer = combineReducers({
  test: testReducer,
});

export default rootReducer;
