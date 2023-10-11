import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://newyork-mern-task-2m2uggaq7-moiallu.vercel.app/',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default instance;
