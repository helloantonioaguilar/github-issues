import axios from 'axios';

const token = process.env.REACT_ACCESS_TOKEN;
const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    accept: 'application/vnd.github.v3+json',
    authorization: `token ${token}`
  }
});

github.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') || process.env.REACT_APP_ACCESS_TOKEN;
  config.headers.authorization = `token ${token}`;
  return config;
});

export default github;
