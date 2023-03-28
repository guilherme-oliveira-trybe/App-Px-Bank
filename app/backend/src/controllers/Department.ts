import { Request, Response } from 'express';
import { IDepartment } from '../interfaces/IDepartment';
import DepartmentService from '../services/Department';

export default class DepartmentController {
  private _departmentService = new DepartmentService();

  public async getAll(req: Request, res: Response) {
    const result = await this._departmentService.getAll();

    return res.status(200).json(result);
  }

  public async create(req: Request, res: Response) {
    const result = await this._departmentService.create(req.body as IDepartment);

    return res.status(201).json(result);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const department = {...req.body, id: Number(id)}
    const result = await this._departmentService.update(department);

    return res.status(200).json(result);
  }

  public async delete(req: Request, res: Response) {
    await this._departmentService.delete(Number(req.params.id));

    return res.status(204).end();
  }
}