import React, { useContext } from 'react';
import Context from '../context/Context';
import Button from './Button';

function TableEmployees() {
  const { filterEmployees } = useContext(Context);

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Departamento</th>
          <th>Salário</th>
          <th>Data de Nascimento</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {filterEmployees.map((employee) => (
          <tr key={ employee.id }>
            <td>{employee.name}</td>
            <td>{employee.departmentName.department}</td>
            <td>{employee.salary}</td>
            <td>{employee.dateOfBirth}</td>
            <td>
              <Button>Editar</Button>
              <Button>Excluir</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableEmployees;
