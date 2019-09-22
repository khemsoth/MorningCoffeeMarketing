const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');

dotenv.config();

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/', router);
app.use(express.static(__dirname + '/assets'))

app.listen(PORT, function(req, res) {
  console.log('App listening on port: ' + PORT)
})