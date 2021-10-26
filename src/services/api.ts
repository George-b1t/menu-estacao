import axios from 'axios';

const api = axios.create({
  baseURL: 'https://estacao-cervejaria.vercel.app/api'
});

// http://localhost:3000/api
// https://estacao-cervejaria.vercel.app/api

export { api };
