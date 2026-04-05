import axios from 'axios';

const api = axios.create({
  // O endereço onde o NestJS está a correr
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
    'Content-Type': 'application/json',
  },
});

export default api;