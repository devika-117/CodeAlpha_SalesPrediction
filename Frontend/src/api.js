import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

export const getOverview = () => API.get('/overview');
export const getAnalytics = () => API.get('/analytics');
export const getPredictions = (payload) => API.post('/predict', payload);
export const getOptimalBudget = (payload) => API.post('/optimize', payload);

export default API;