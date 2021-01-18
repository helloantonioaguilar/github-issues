import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'token 9c75a7551627c3432697275369c9cd9302681bc2'
  }
});

export default github;
