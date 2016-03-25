var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
var app = express();
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
app.get('/', function (req, res) {
  res.sendFile('index.html', {
    root: static_path
  });
});

app.use(bodyParser.json()); // for parsing application/json

// Run the workflow (bundling) when not in production
if (!isProduction) {
  var bundle = require('./server/bundle.js');
  bundle();

  // requests to localhost:3000/build is proxied
  // to webpack-dev-server
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });

}

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
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

app.post('/e-mail', function(req, res) {
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
