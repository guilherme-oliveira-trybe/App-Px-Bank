import express from 'express';
import { departmentRoute, employeeRoute } from './routes';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => res.status(200).send());

app.use(departmentRoute);
app.use(employeeRoute);

export default app;