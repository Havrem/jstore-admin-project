import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jjfakestore-fork-alex-production.up.railway.app', // Api address
  withCredentials: true, // send/receive JSESSIONID cookie
})