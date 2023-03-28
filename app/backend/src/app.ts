import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import errorHandler from './middlewares/errors';
import { departmentRoute, employeeRoute } from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/health', (_req, res) => res.status(200).send());

app.use(departmentRoute);
app.use(employeeRoute);
app.use(errorHandler);

export default app;