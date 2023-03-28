import Employee from '../database/models/Employee';
import Department from '../database/models/Department';
import { ICreate } from '../interfaces/IEmployee';

export default class EmployeeService {
  private _employeeModel = Employee;

  public async getAll() {
    const employees = await this._employeeModel.findAll({
      include: {
        model: Department,
        as: 'departmentName',
        attributes: ['department']
      },
      attributes: {exclude: ['departmentId']}
    });
    return employees
  }

  public async create(info: ICreate) {
    await this._employeeModel.create({...info});
    return { message: 'Usuário Cadastrado com Sucesso'}
  }
}