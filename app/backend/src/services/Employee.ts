import Employee from '../database/models/Employee';
import Department from '../database/models/Department';
import IUpdate, { ICreate } from '../interfaces/IEmployee';
import CustomError from '../errors/CustomError';

export default class EmployeeService {
  private _employeeModel = Employee;

  public async getAll() {
    const employees = await this._employeeModel.findAll({
      order: [['name', 'ASC']],
      include: {
        model: Department,
        as: 'departmentName',
        attributes: ['department']
      },
      attributes: {exclude: ['departmentId']}
    });
    return employees;
  }

  public async create(info: ICreate) {
    const employeeFound = await this._employeeModel.findOne({ where: { cpf: info.cpf}});
    if (employeeFound) {
      throw new CustomError(400, 'CPF já cadastrado anteriormente')
    }
    await this._employeeModel.create({...info});
    return { message: 'Funcionário Cadastrado com Sucesso' };
  }

  public async update(info: IUpdate) {
    const employeeFound = await this._employeeModel.findOne({ where: { cpf: info.cpf}});
    if (employeeFound && employeeFound.id !== info.id) {
      throw new CustomError(400, 'CPF já cadastrado anteriormente')
    }
    await this._employeeModel.update({ ...info }, { where: { id: info.id } })
    return { message: 'Cadastro Atualizado com Sucesso' };
  }

  public async delete(id: number) {
    return await this._employeeModel.destroy({ where: { id } })
  }
}