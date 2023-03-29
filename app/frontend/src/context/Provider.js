import React, { useMemo, useState } from 'react';
import Context from './Context';

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
  const [allDepartment, setAllDepartment] = useState([]);

  const value = useMemo(() => ({
    allDepartment,
    setAllDepartment,
  }), [allDepartment]);

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
