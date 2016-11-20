var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var name = req.param('name');
  res.render('index', {name});
});

module.exports = router;
