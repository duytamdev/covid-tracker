import React, { useEffect } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './appRedux/store';
import HomePage from './pages/HomePage';
import { dispatchRef } from './appRedux/ReduxDispatcher';
import { ENV } from './utils/appConstants';

function App() {
  if (ENV.REACT_APP_ENVIRONMENT === 'production') {
    console.log = () => {};
    console.error = () => {};
    console.debug = () => {};
  }
  useEffect(() => {
    dispatchRef.current = store.dispatch;
  }, []);
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>

  );
}

export default App;
