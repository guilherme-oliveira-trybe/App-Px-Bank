import Department from '../database/models/Department';
import IUpdateDepartment, { IDepartment } from '../interfaces/IDepartment';

export default class DepartmentService {
  private _departmentModel = Department;

  public async getAll() {
    const departments = await this._departmentModel.findAll();
    return departments
  }

  public async create(info: IDepartment) {
    await this._departmentModel.create({ ...info });
    return { message: 'Departamento Cadastrado com Sucesso' };
  }

  public async update(info: IUpdateDepartment) {
    await this._departmentModel.update({ ...info }, { where: { id: info.id } })
    return { message: 'Departamento atualizado com Sucesso' };
  }

  public async delete(id: number) {
    return await this._departmentModel.destroy({ where: { id } })
  }
}