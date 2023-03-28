import { Request, Response } from 'express';
import DepartmentService from '../services/Department';

export default class DepartmentController {
  private _departmentService = new DepartmentService();

  public async getAll(req: Request, res: Response) {
    const result = await this._departmentService.getAll();

    return res.status(200).json(result);
  }
}