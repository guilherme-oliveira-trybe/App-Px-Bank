import React, { useContext, useState } from 'react';
import { formatDate } from '../assets/formatDate';
import { formatSalary } from '../assets/formatSalary';
import Context from '../context/Context';
import Button from './Button';
import CreateModal from './CreateModal';
import ExcludeModal from './ExcludeModal';
import styles from './TableEmployees.module.css';

function TableEmployees() {
  const INITIAL_STATE = {
    id: '',
    name: '',
    cpf: '',
    salary: '',
    dateOfBirth: '',
  };

  const {
    filterEmployees,
    modal,
    openModal,
    closeModal,
  } = useContext(Context);

  const [employeeData, setEmployeeData] = useState(INITIAL_STATE);

  const excluseOnClick = (values) => {
    setEmployeeData(values);
    openModal('excludeModal');
  };

  const editOnClick = (values) => {
    setEmployeeData(values);
    openModal('editModal');
  };

  return (
    <div className={ styles.container }>
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
                <Button onClick={ () => editOnClick(employee) }>
                  Editar

                </Button>
                <Button
                  onClick={ () => excluseOnClick(employee) }
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
          <CreateModal
            isOpen={ modal.editModal }
            text="Editar Funcionário"
            close={ () => closeModal('editModal') }
            editInfo={ employeeData }
          />
        </tbody>
      </table>
    </div>
  );
}

export default TableEmployees;
