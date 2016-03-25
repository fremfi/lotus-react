var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
var app = express();
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
//var publicPath = path.resolve(__dirname, 'build');
var publicPath = path.join(__dirname, 'public');
//app.set('port', (process.env.PORT || 5000));
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
var smtpTransport = require('nodemailer-smtp-transport');
var credentials = require('./credentials');
var smtpTransportOptions = {
    service: 'gmail',
    auth: {
        user: credentials.smtpTransportOptions.auth.user,
        pass: credentials.smtpTransportOptions.auth.password
    }
  };
  
var mailTransport = nodemailer.createTransport(smtpTransport(smtpTransportOptions));

app.post('/e-mail', function(req, res) {
  var mailOptions = {
    from: '"'+ req.body.fullName +'" <' + req.body.email + '>', // sender's address
    to: 'frederick.mfinanga@gmail.com', // list of receivers
    subject: 'FJMVA: Your services are needed', // Subject 
    text: req.body.msg
  };

  // send mail with defined transport object
  mailTransport.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
  res.send(req.body);
});

var server = http.createServer(app).listen(port, function() {
  console.log('Server running on port ' + port);
});
