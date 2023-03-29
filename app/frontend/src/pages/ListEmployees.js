import React from 'react';
import Button from '../components/Button';
import FilterEmployee from '../components/FilterEmployee';
import TableEmployees from '../components/TableEmployees';

function ListEmployees() {
  return (
    <section>
      <FilterEmployee />
      <TableEmployees />
      <Button>Novo Funcionário</Button>
    </section>
  );
}

export default ListEmployees;
