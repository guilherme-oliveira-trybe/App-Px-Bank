import React, { useContext, useState } from 'react';
import { formatDate } from '../assets/formatDate';
import { formatSalary } from '../assets/formatSalary';
import Context from '../context/Context';
import Button from './Button';
import ExcludeModal from './ExcludeModal';

function TableEmployees() {
  const INITIAL_STATE = {
    id: '',
    name: '',
    cpf: '',
    salary: '',
    dateOfBirth: '',
  };

  const { filterEmployees, openExcludeModal } = useContext(Context);
  const [employeeData, setEmployeeData] = useState(INITIAL_STATE);

  const handleOnClick = (values) => {
    setEmployeeData(values);
    openExcludeModal();
  };

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
            <td>{formatSalary(employee.salary)}</td>
            <td>{formatDate(employee.dateOfBirth)}</td>
            <td>
              <Button>Editar</Button>
              <Button
                onClick={ () => handleOnClick(employee) }
              >
                Excluir

              </Button>
            </td>
          </tr>
        ))}
        <ExcludeModal
          name={ employeeData.name }
          cpf={ employeeData.cpf }
          id={ employeeData.id }
        />
      </tbody>
    </table>
  );
}

export default TableEmployees;
