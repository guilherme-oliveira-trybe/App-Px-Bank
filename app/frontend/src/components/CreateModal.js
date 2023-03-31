import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import CurrencyInput from 'react-currency-input-field';
import { validationForm } from '../assets/validationForm';
import Context from '../context/Context';
import { createEmployee, getAllEmployees, updateEmployee } from '../services/api';
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
function CreateModal({ text, isOpen, close, editInfo = {} }) {
  const {
    // allEmployees,
    allDepartment,
    setAllEmployees,
    setFilterEmployees,
  } = useContext(Context);

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [departmentId, setDepartmentId] = useState();
  const [departmentName, setDepartmentName] = useState('');
  const [salary, setSalary] = useState();
  const [dateOfBirth, setDateOfBirth] = useState('');

  console.log(editInfo);

  useEffect(() => {
    const editMode = (values) => {
      if (values.id) {
        setName(values.name);
        setCpf(values.cpf);
        setSalary(values.salary);
        setDateOfBirth(values.dateOfBirth);
      }
    };
    editMode(editInfo);
  }, [editInfo]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const getDepartmentId = (value) => {
    const [{ id }] = allDepartment.filter(({ department }) => department === value);
    setDepartmentName(value);
    setDepartmentId(id);
  };

  const cleanStates = () => {
    setName('');
    setCpf('');
    setDepartmentId(undefined);
    setDepartmentName('');
    setSalary(undefined);
    setDateOfBirth('');
  };

  const submitOnClick = async () => {
    const body = {
      name,
      cpf,
      departmentId,
      salary,
      dateOfBirth,
    };

    if (editInfo.id) {
      try {
        await updateEmployee(editInfo.id, body);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await createEmployee(body);
      } catch (error) {
        console.error(error);
      }
    }

    const data = await getAllEmployees();
    setAllEmployees(data);
    setFilterEmployees(data);

    cleanStates();
    return close();
  };

  const cancelOnClick = () => {
    cleanStates();
    close();
  };

  return (
    <Modal
      isOpen={ isOpen }
      onRequestClose={ close }
      style={ customStyles }
    >
      <Text text={ text } />
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
        <label htmlFor="salary-input">
          Salário:
          <CurrencyInput
            id="salary-input"
            allowDecimals={ false }
            prefix="R$ "
            defaultValue={ 0 }
            value={ salary }
            onValueChange={ (value) => setSalary(value) }
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
        onClick={ cancelOnClick }
        type="reset"
      >
        Cancelar

      </Button>
      <Button
        onClick={ submitOnClick }
        disabled={ validationForm({ name, salary, cpf, departmentId, dateOfBirth }) }
      >
        Salvar

      </Button>
    </Modal>
  );
}

export default CreateModal;
