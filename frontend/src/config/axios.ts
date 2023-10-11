import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://newyork-mern-task-1qv9ihtl9-moiallu.vercel.app/',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default instance;
