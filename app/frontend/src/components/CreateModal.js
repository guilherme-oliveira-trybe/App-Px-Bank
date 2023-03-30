import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { validationForm } from '../assets/validationForm';
import Context from '../context/Context';
import { createEmployee, getAllEmployees } from '../services/api';
import Button from './Button';
import Text from './Text';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

// eslint-disable-next-line react/prop-types
function CreateModal() {
  const {
    createModal,
    closeCreateModal,
    allDepartment,
    setAllEmployees,
    setFilterEmployees,
  } = useContext(Context);

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [departmentId, setDepartmentId] = useState();
  const [departmentName, setDepartmentName] = useState('');
  const [salary, setSalary] = useState(0);
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const getDepartmentId = (value) => {
    const [{ id }] = allDepartment.filter(({ department }) => department === value);
    setDepartmentName(value);
    setDepartmentId(id);
  };

  const handleOnClick = async () => {
    const body = {
      name,
      cpf,
      departmentId,
      salary,
      dateOfBirth,
    };

    try {
      await createEmployee(body);
    } catch (error) {
      console.error(error);
    }

    const data = await getAllEmployees();
    setAllEmployees(data);
    setFilterEmployees(data);

    return closeCreateModal();
  };

  return (
    <Modal
      isOpen={ createModal }
      onRequestClose={ closeCreateModal }
      style={ customStyles }
    >
      <Text text="Novo Funcionário" />
      <form onSubmit={ handleSubmit }>
        <label>
          Nome:
          <input
            type="text"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label>
          CPF:
          <input
            type="text"
            value={ cpf }
            onChange={ ({ target }) => setCpf(target.value) }
          />
        </label>
        <label>
          Departamento:
          <select
            value={ departmentName }
            onChange={ ({ target }) => getDepartmentId(target.value) }
          >
            <option value="" disabled>Selecione o Departamento</option>
            {allDepartment.map(({ department, id }) => (
              <option key={ id }>{department}</option>
            ))}
          </select>
        </label>
        <label>
          Salário:
          <input
            type="number"
            value={ salary }
            onChange={ ({ target }) => setSalary(target.value) }
          />
        </label>
        <label>
          Data de Nascimento:
          <input
            type="date"
            value={ dateOfBirth }
            onChange={ ({ target }) => setDateOfBirth(target.value) }
          />
        </label>
      </form>
      <Button
        onClick={ closeCreateModal }
        type="reset"
      >
        Cancelar

      </Button>
      <Button
        onClick={ handleOnClick }
        disabled={ validationForm({ name, salary, cpf, departmentId, dateOfBirth }) }
      >
        Salvar

      </Button>
    </Modal>
  );
}

export default CreateModal;
