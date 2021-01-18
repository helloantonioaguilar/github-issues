import axios from 'axios';
const PORT = 3001;

const githubScrap = axios.create({
  baseURL: `http://localhost:${PORT}`
});

export default githubScrap;
