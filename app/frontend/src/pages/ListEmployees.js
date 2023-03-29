import React, { useContext, useEffect } from 'react';
import Button from '../components/Button';
import FilterEmployee from '../components/FilterEmployee';
import TableEmployees from '../components/TableEmployees';
import Context from '../context/Context';
import { getAllDepartments, getAllEmployees } from '../services/api';

function ListEmployees() {
  const { setAllDepartment, setAllEmployees } = useContext(Context);

  useEffect(() => {
    const getDepartments = async () => {
      const data = await getAllDepartments();
      setAllDepartment(data);
    };
    const getEmployees = async () => {
      const data = await getAllEmployees();
      setAllEmployees(data);
    };
    getDepartments();
    getEmployees();
  }, [setAllDepartment, setAllEmployees]);

  return (
    <section>
      <FilterEmployee />
      <TableEmployees />
      <Button>Novo Funcionário</Button>
    </section>
  );
}

export default ListEmployees;
