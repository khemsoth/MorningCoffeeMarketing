const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const PORT = process.env.PORT || 3000;

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/', router);

app.listen(PORT, function(req, res) {
  console.log('App listening on port: ' + PORT)
})