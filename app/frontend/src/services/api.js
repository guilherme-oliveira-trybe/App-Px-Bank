import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3001' });

export const getAllDepartments = async () => {
  const data = await api.get('/departments').then((response) => response.data);

  return data;
};

export const getAllEmployees = async () => {
  const data = await api.get('/employees').then((response) => response.data);

  return data;
};
