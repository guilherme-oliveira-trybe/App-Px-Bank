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

    return res.status(200).json(result);
  }
}