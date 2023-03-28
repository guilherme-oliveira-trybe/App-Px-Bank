import Department from '../database/models/Department';

export default class DepartmentService {
  private _departmentModel = Department;

  public async getAll() {
    const departments = await this._departmentModel.findAll();
    return departments
  }
}