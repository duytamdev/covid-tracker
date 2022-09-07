import React, { useEffect } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './appRedux/store';
import HomePage from './pages/HomePage';
import { dispatchRef } from './appRedux/ReduxDispatcher';

function App() {
  if (process.env.REACT_APP_ENVIRONMENT === 'development') {
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
