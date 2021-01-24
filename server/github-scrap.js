const cheerio = require('cheerio');
const axios = require('axios');

const getGithubPage = async (repoName) => {
  try {
    const { data } = await axios.get(`http://github.com/${repoName}`);
    const $ = cheerio.load(data);
    return $;
  } catch (e) {
    return null;
  }
};

const getDependents = ($) => {
  const payload = {
    dependents: [],
    dependents_count: 0
  };
  try {
    const images = $(
      '.BorderGrid-cell a ul.hx_flex-avatar-stack img'
    );
    if (images.length > 0) {
      const counters = $('.BorderGrid-cell span.Counter');
      for (let i = 0; i < counters.length; i++) {
        const el = counters[i];
        if (el.prev.data.includes('Used by')) {
          payload.dependents_count = el.attribs.title.replace(/,/g, '');
        }
      }
    }
    for (let i = 0; i < images.length; i++) {
      const el = images[i];
      payload.dependents.push({
        img: el.attribs.src,
        owner: el.attribs.alt
      });
    }
  } catch (e) {
    // console.log(e.message, e);
  }
  return payload;
};

const getContributors = ($) => {
  const payload = {
    contributors: [],
    contributors_count: 0
  };
  try {
    const images = $(
      '.BorderGrid-cell ul img.d-block.avatar-user'
    );
    if (images.length > 0) {
      const counters = $('.BorderGrid-cell span.Counter');
      for (let i = 0; i < counters.length; i++) {
        const el = counters[i];
        if (el.prev.data.includes('Contributors')) {
          payload.contributors_count = el.attribs.title.replace(/,/g, '');
        }
      }
    }
    for (let i = 0; i < images.length; i++) {
      const el = images[i];
      payload.contributors.push({
        img: el.attribs.src,
        owner: el.attribs.alt
      });
    }
  } catch (e) {
    // console.log(e.message, e);
  }
  return payload;
};

module.exports = {
  getDependents,
  getContributors,
  getGithubPage
};
