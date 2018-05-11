import api from './../config/api';

export default {
  login: (email, password) => api.get('/users', { email, password }),
  getToken: email => api.get('/users', { email }) // Sera necesario? Podria pasar todo con el OK y se lo guarda y chau
};
