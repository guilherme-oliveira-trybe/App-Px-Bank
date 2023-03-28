import { Router } from 'express';
import DepartmentController from '../controllers/Department';

const route = Router();
const departmentController = new DepartmentController();

route.get('/departments', (req, res) => departmentController.getAll(req, res));

export default route;