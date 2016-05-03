var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");
var path = require('path');
var http = require('http');
var app = express();
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 8080;
var publicPath = path.join(__dirname, 'public');

if (isProduction) {
  app.use(express.static(publicPath));
  app.get('/', function (req, res) {
    res.sendFile('index.html', {
      root: static_path
    });
  });
}

app.use(bodyParser.json()); // for parsing application/json

//Getting Images (Discover)
var photographs = [];
fs.readdir('./client/assets/images/discover', function (err, files) {
    if (err) {
        throw err;
    }
    photographs = files;
});

app.get('/api/images', function(req, res){
  if (req.query.page) {
    var pagedPhotographs = photographs.slice((req.query.page * 10), ((req.query.page * 10) + 10));
    if (pagedPhotographs.length < 10) {
      res.send({ hasMoreImages: false, data: pagedPhotographs });
    }
    else {
      res.send({ hasMoreImages: true, data: pagedPhotographs });
    }
  }
  else {
    res.send({ hasMoreImages: false, data: photographs });
  }
});

//Sending Emails
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var credentials = require('./credentials');
var auth = {
  auth: {
    api_key: 'key-222c94114eb5d35ceff29974511c8b6d',
    domain: 'sandbox9ea32a98787e45f99414f1a54e1b4792.mailgun.org'
  }
};
var nodemailerMailgun = nodemailer.createTransport(mg(credentials.mgAuth));

app.post('/api/contact-us', function(req, res) {
  nodemailerMailgun.sendMail({
    from: '"'+ req.body.fullName +'" <' + req.body.email + '>',
    to: 'frederick.mfinanga@gmail.com',
    subject: 'FJMVA: Your services are needed',
    text: req.body.msg
  }, function (err, info) {
    if (err) {
      console.log('Error sending email: ' + err);
    }
    else {
      console.log('Success sending email: ' + JSON.stringify(info));
    }
  });
  res.send(req.body);
});

var server = http.createServer(app).listen(port, function() {
  console.log('Server running on port ' + port);
});
