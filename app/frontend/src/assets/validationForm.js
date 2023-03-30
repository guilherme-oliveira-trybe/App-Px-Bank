import { cpf as CpfValidator } from 'cpf-cnpj-validator';
import { isValidDate } from './validationDate';

export const validationForm = ({ name, departmentId, salary, dateOfBirth, cpf }) => {
  const MIN_LENGTH = 3;
  const MIN_SALARY = 1;
  const answer = {
    validName: !(!name === '' || name.length < MIN_LENGTH),
    validDepartmentId: !(departmentId === '' || !departmentId),
    validsalary: !salary < MIN_SALARY,
    validDateOfBirth: isValidDate(dateOfBirth),
    validCpf: CpfValidator.isValid(cpf),
  };

  if (Object.values(answer).includes(false)) return true;
};
