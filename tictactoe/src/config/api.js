import { create } from 'apisauce';

const api = create({
  baseURL: 'http://localhost:3001/',
  headers: {},
  timeout: 5000
});

export default api;
