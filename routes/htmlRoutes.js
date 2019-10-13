const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/solutions', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/solutions.html'));
});

router.get('/reviews', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/reviews.html'));
});

router.get('/blog', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/blog.html'));
});

router.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/contact.html'));
});

module.exports = router;