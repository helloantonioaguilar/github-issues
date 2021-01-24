const express = require('express');
const getDependents = require('./github-scrap').getDependents;
const getContributors = require('./github-scrap').getContributors;
const getGithubPage = require('./github-scrap').getGithubPage;
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(cors());
app.use('/auth', require('./auth'));

app.get('/github', async (req, res) => {
  const repo = req.query.repo || '';
  const page = await getGithubPage(repo);
  const dependents = getDependents(page);
  const contributors = getContributors(page);
  res.status(200).send({ ...dependents, ...contributors });
});

app.listen(PORT, () => {
  console.log(`Running express on ${PORT}...`);
});
