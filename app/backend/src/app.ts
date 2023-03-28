import express from 'express';
import departmentRoute from './routes/department';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => res.status(200).send());

app.use(departmentRoute);

export default app;