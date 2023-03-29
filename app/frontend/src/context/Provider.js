import React from 'react';
import Context from './Context';

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  );
}

export default Provider;
