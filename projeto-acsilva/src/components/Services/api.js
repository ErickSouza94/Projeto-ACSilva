import axios from 'axios';

const api = axios.create({
  // O endereço onde o NestJS está a correr
  baseURL: 'https://acsilva-backend-render.onrender.com', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;