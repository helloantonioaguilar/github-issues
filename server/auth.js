const express = require('express');
const router = express.Router();

const https = require('https');
const qs = require('querystring');

function authenticate (code, cb) {
  const data = qs.stringify({
    client_id: process.env.APP_CLIENT_ID,
    client_secret: process.env.APP_SECRET,
    code: code
  });

  const reqOptions = {
    host: 'github.com',
    port: 443,
    path: '/login/oauth/access_token',
    method: 'POST',
    headers: { 'content-length': data.length, accept: 'application/json' }
  };

  let body = '';
  const req = https.request(reqOptions, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      body += chunk;
    });
    res.on('end', function () {
      cb(null, JSON.parse(body).access_token);
    });
  });

  req.write(data);
  req.end();
  req.on('error', function (e) {
    cb(e.message);
  });
}

router.get('/:code', function (req, res) {
  authenticate(req.params.code, function (err, token) {
    let result;
    if (err || !token) {
      result = { error: err || 'bad_code' };
      res.status(400).json(result);
    } else {
      result = { token: token };
      res.json(result);
    }
  });
});

module.exports = router;
