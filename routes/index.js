var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/project', function(req, res, next) {
  res.render('project');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/airJorden', function(req, res, next) {
  res.render('air');
});

router.get('/scrollTrigger', function(req, res, next) {
  res.render('scroll');
});

module.exports = router;
