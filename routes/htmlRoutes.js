const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/solutions', function(req, res) {
  res.sendFile(path.join(__dirname, '../solutions.html'));
});

router.get('/reviews', function(req, res) {
  res.sendFile(path.join(__dirname, '../reviews.html'));
});

router.get('/blog', function(req, res) {
  res.sendFile(path.join(__dirname, '../blog.html'));
});

router.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, '../contact.html'));
});

module.exports = router;