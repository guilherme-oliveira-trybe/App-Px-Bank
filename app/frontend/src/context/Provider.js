import React, { useCallback, useMemo, useState } from 'react';
import Context from './Context';

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
  const [allDepartment, setAllDepartment] = useState([]);
  const [allEmployees, setAllEmployees] = useState([]);
  const [filterEmployees, setFilterEmployees] = useState([]);

  const filterByNameAndDepartment = useCallback((name, department) => {
    console.log(name, department);
    const employeeFound = allEmployees.filter((employee) => (
      employee.name.toLowerCase().includes(name)
    )).filter((employee) => employee.departmentName.department === department);

    return employeeFound;
  }, [allEmployees]);

  const filterByName = useCallback((name) => {
    const nameFound = allEmployees.filter((employee) => (
      employee.name.toLowerCase().includes(name)
    ));

    return nameFound;
  }, [allEmployees]);

  const filterByDepartment = useCallback((department) => {
    const departmentFound = allEmployees.filter((employee) => (
      employee.departmentName.department === department
    ));

    return departmentFound;
  }, [allEmployees]);

  const filters = useCallback((name, department) => {
    if ((name === '' || name === ' ') && department === '') {
      return setFilterEmployees(allEmployees);
    }
    if (name && department) {
      return setFilterEmployees(filterByNameAndDepartment(name, department));
    }
    if (name) {
      return setFilterEmployees(filterByName(name));
    }
    if (department) {
      return setFilterEmployees(filterByDepartment(department));
    }
  }, [allEmployees, filterByNameAndDepartment, filterByName, filterByDepartment]);

  const value = useMemo(() => ({
    allDepartment,
    setAllDepartment,
    allEmployees,
    setAllEmployees,
    filterEmployees,
    setFilterEmployees,
    filters,
  }), [allDepartment, allEmployees, filterEmployees, filters]);

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
