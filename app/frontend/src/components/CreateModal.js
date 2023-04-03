/* eslint-disable react/jsx-max-depth */
import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import CurrencyInput from 'react-currency-input-field';
import { validationForm } from '../assets/validationForm';
import Context from '../context/Context';
import { createEmployee, getAllEmployees, updateEmployee } from '../services/api';
import Button from './Button';
import Form from './Form';
import Input from './Input';
import Select from './Select';
import Title from './Title';
import styles from './CreateModal.module.css';

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

function CreateModal({ text, isOpen, close, editInfo = {} }) {
  const {
    allDepartment,
    setAllEmployees,
    setFilterEmployees,
    handleSubmit,
  } = useContext(Context);

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [departmentId, setDepartmentId] = useState();
  const [departmentName, setDepartmentName] = useState('');
  const [salary, setSalary] = useState();
  const [dateOfBirth, setDateOfBirth] = useState('');

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
      onRequestClose={ () => close() }
      style={ customStyles }
    >
      <Title title={ text } />
      <Form onSubmit={ handleSubmit }>
        <div className={ styles.container }>
          <label htmlFor="input-name">
            Nome:
            <Input
              id="input-name"
              type="text"
              value={ name }
              onChange={ ({ target }) => setName(target.value) }
            />
          </label>
          <label htmlFor="input-cpf">
            CPF:
            <Input
              id="input-cpf"
              type="text"
              value={ cpf }
              onChange={ ({ target }) => setCpf(target.value) }
            />
          </label>
          <label htmlFor="select-department-form">
            Departamento:
            <Select
              id="select-department-form"
              value={ departmentName }
              onChange={ ({ target }) => getDepartmentId(target.value) }
            >
              <option value="" disabled>Selecione o Departamento</option>
              {allDepartment.map(({ department, id }) => (
                <option key={ id }>{department}</option>
              ))}
            </Select>
          </label>
          <label htmlFor="input-salary">
            Salário:
            <CurrencyInput
              id="input-salary"
              allowDecimals={ false }
              prefix="R$ "
              defaultValue={ 0 }
              value={ salary }
              onValueChange={ (value) => setSalary(value) }
            />
          </label>
          <label htmlFor="input-dateOfBirth">
            Data de Nascimento:
            <Input
              id="input-dateOfBirth"
              type="date"
              value={ dateOfBirth }
              onChange={ ({ target }) => setDateOfBirth(target.value) }
            />
          </label>
        </div>
      </Form>
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

CreateModal.propTypes = {
  text: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  editInfo: PropTypes.shape({
    id: PropTypes.node,
    name: PropTypes.string,
    cpf: PropTypes.string,
    salary: PropTypes.node,
    dateOfBirth: PropTypes.string,
  }),
};

export default CreateModal;
