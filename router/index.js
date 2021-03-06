'use-strict';

var express = require('express');
var router = express.Router();
var path =  require('path');

router.get('/*', (req, res, next) => {
  if (req.headers.host !== '<your-username>.github.io')
    if (process.env.NODE_ENV !== 'development')
      return res.status(404).end();
  next();
});

router.get('/',(request, response, next) =>{
  response.status(200).sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;
