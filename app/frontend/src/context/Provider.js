import React, { useMemo, useState } from 'react';
import Context from './Context';

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
  const [allDepartment, setAllDepartment] = useState([]);
  const [allEmployees, setAllEmployees] = useState([]);

  const value = useMemo(() => ({
    allDepartment,
    setAllDepartment,
    allEmployees,
    setAllEmployees,
  }), [allDepartment, allEmployees]);

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
