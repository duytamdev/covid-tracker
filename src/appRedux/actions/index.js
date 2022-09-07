// eslint-disable-next-line no-underscore-dangle
const _onSuccess = (action) => `${action}_SUCCESS`;
// eslint-disable-next-line no-underscore-dangle
const _onFail = (action) => `${action}_FAIL`;
// eslint-disable-next-line no-underscore-dangle
const _onUnmount = (action) => `${action}_UNMOUNT`;
const TYPES_ACTIONS = {
  getAllCountries: 'GET_ALL_COUNTRIES',
};
export {
  _onSuccess, _onFail, _onUnmount, TYPES_ACTIONS,
};
const Actions = {
  getAllCountries: (payload) => ({
    type: TYPES_ACTIONS.getAllCountries,
    payload,
  }),
};
export default Actions;
