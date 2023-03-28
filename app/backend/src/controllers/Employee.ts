import { Request, Response } from 'express';
import EmployeeService from '../services/Employee';
import { ICreate } from '../interfaces/IEmployee'

export default class EmployeeController {
  private _employeeService = new EmployeeService();

  public async getAll(_req: Request, res: Response) {
    const result = await this._employeeService.getAll();

    return res.status(200).json(result);
  }

  public async create(req: Request, res: Response) {
    const result = await this._employeeService.create(req.body as ICreate);

    return res.status(201).json(result);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const employee = {...req.body, id: Number(id)}
    const result = await this._employeeService.update(employee);

    return res.status(200).json(result);
  }

  public async delete(req: Request, res: Response) {
    await this._employeeService.delete(Number(req.params.id));

    return res.status(204).end();
  }
}