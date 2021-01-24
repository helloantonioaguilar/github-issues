import axios from 'axios';
const PORT = 3001;

const server = axios.create({
  baseURL: `http://localhost:${PORT}`
});

export default server;
