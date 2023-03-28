import { Router } from 'express';
import EmployeeController from '../controllers/Employee';

const route = Router();
const employeeController = new EmployeeController();

route.get('/employees', (req, res) => employeeController.getAll(req, res));
route.post('/employees', (req, res) => employeeController.create(req, res));

export default route;