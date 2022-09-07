import React from 'react';

export const dispatchRef = React.createRef();

const ReduxDispatcher = (action) => {
  dispatchRef.current?.(action);
};

export default ReduxDispatcher;
