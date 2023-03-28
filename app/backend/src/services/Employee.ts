import Employee from '../database/models/Employee';

export default class EmployeeService {
  private _employeeModel = Employee;

  public async getAll() {
    const employees = await this._employeeModel.findAll();
    return employees
  }
}