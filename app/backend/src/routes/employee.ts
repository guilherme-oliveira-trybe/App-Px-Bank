import { Router } from 'express';
import EmployeeController from '../controllers/Employee';
import employeeValidation from '../middlewares/employeeValidation';

const route = Router();
const employeeController = new EmployeeController();

route.get('/employees', (req, res) => employeeController.getAll(req, res));
route.post('/employees', employeeValidation, (req, res) => employeeController.create(req, res));
route.put('/employees/:id', employeeValidation, (req, res) => employeeController.update(req, res));
route.delete('/employees/:id', (req, res) => employeeController.delete(req, res));

export default route;