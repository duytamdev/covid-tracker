import { _onFail, _onSuccess, _onUnmount } from '../actions';
import stateDefault from './initialStates';

// eslint-disable-next-line default-param-last
const reducerDefault = (state = stateDefault, action, Action) => {
  switch (action.type) {
    case Action:
      return { ...state, isLoading: true };
    case _onSuccess(Action):
      return { data: action.data, isLoading: false };
    case _onFail(Action):
      if (action.data) {
        return { data: action.data, isLoading: false };
      }
      return { ...state, isLoading: false };
    case _onUnmount(Action):
      return { ...stateDefault };
    default:
      return state;
  }
};

export default reducerDefault;
