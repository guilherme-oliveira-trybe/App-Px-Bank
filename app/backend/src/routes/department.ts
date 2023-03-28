import { Router } from 'express';
import DepartmentController from '../controllers/Department';
import departmentValidation from '../middlewares/departmentValidation';

const route = Router();
const departmentController = new DepartmentController();

route.get('/departments', (req, res) => departmentController.getAll(req, res));
route.post(
  '/departments',
  departmentValidation,
  (req, res) => departmentController.create(req, res)
);
route.put(
  '/departments/:id',
  departmentValidation,
  (req, res) => departmentController.update(req, res)
);
route.delete('/departments/:id', (req, res) => departmentController.delete(req, res));

export default route;