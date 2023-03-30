import React, { useContext, useEffect } from 'react';
import Button from '../components/Button';
import FilterEmployee from '../components/FilterEmployee';
import TableEmployees from '../components/TableEmployees';
import Context from '../context/Context';
import { getAllDepartments, getAllEmployees } from '../services/api';
import CreateModal from '../components/CreateModal';

function ListEmployees() {
  const {
    setAllDepartment,
    setAllEmployees,
    setFilterEmployees,
    openCreateModal,
  } = useContext(Context);

  useEffect(() => {
    const getDepartments = async () => {
      const data = await getAllDepartments();
      setAllDepartment(data);
    };
    const getEmployees = async () => {
      const data = await getAllEmployees();
      setAllEmployees(data);
      setFilterEmployees(data);
    };
    getDepartments();
    getEmployees();
  }, [setAllDepartment, setAllEmployees, setFilterEmployees]);

  return (
    <section>
      <FilterEmployee />
      <TableEmployees />
      <Button onClick={ openCreateModal }>Novo Funcionário</Button>
      <CreateModal />
    </section>
  );
}

export default ListEmployees;
