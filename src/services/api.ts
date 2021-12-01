import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
});

// http://localhost:3000/api
// https://estacao-cervejaria.vercel.app/api

export { api };
