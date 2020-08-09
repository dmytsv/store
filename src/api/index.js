import axios from 'axios';

export const storeApi = axios.create({
  baseURL: 'https://demo3211013.mockable.io/ajmad',
  headers: {
    'Content-Type': 'application/json',
  },
});
