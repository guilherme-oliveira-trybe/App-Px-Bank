import React, { useContext } from 'react';
import Context from '../context/Context';
import Button from './Button';
import ExcludeModal from './ExcludeModal';

function TableEmployees() {
  const { filterEmployees, openExcludeModal } = useContext(Context);

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
              <Button onClick={ openExcludeModal }>Excluir</Button>
              <ExcludeModal
                name={ employee.name }
                cpf={ employee.cpf }
                id={ employee.id }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableEmployees;
