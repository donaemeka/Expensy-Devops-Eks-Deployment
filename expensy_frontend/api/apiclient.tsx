'use client'
import axios from 'axios';

export const apiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(async config => {
  const apiKey = process.env.NEXT_APP_API_KEY || 'fergdhkdskgldkdd';

  if (apiKey) {
    config.headers.Authorization = `Bearer ${apiKey}`;
  }
  return config;
});

export default apiClient;
