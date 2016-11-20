var express = require('express');
var router = express.Router();
var http = require('http');


router.get('/', function(req, res, next) {
  var name = req.param('name');
  http.createServer(function(req, res) {
    res.writeHead(301,
        {Location: 'http://127.0.0.1:9999/name/'+name}
    );
    response.end();
  });
  res.redirect("http://127.0.0.1:9999/name/"+name)
});

module.exports = router;
