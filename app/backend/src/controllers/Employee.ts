import { Request, Response } from 'express';
import EmployeeService from '../services/Employee';

export default class EmployeeController {
  private _employeeService = new EmployeeService();

  public async getAll(req: Request, res: Response) {
    const result = await this._employeeService.getAll();

    return res.status(200).json(result);
  }
}