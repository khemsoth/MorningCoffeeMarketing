const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const PORT = process.env.PORT || 3000;
const nodemailer = require('nodemailer');
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

require('dotenv').config();

app.use(bodyParser.urlencoded({extended: true}))

// ROUTES

var routes = require('./routes/htmlRoutes');
app.use(routes);


app.post('/contact', function(req, res) {
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 465, 
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  })
  const mailOpts = {
    from: 'Your sender info',
    to: process.env.GMAIL_USER,
    subject: 'New message from MCM site contact form', 
    text: `${req.body.name} (${req.body.email}) 
    subject:
      ${req.body.subject} 
    message: 
      ${req.body.message}`
  }
  smtpTrans.sendMail(mailOpts, function(err, res) {
    if(err) {
      console.log(err);
    } else {
      console.log(res);
    }
  })
  res.redirect('/')
})

app.use('/', router);
app.use(express.static(__dirname));

app.listen(PORT, function(req, res) {
  console.log('App listening on port: ' + PORT)
});

