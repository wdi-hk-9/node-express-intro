// Declaration
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var carRouter = express.Router();

// Configure EJS (template engine) with Express
app.set('views',       './views');
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next){
  console.log('%s request to %s from %s',
              req.method, // GET
              req.path,   // /
              req.ip);    // ::1 == 127.0.0.1
  next();
});

// ROUTES
// app.get('/', function(req,res){
//   // res.send('index');
//   // res.json({a: 'fer'})
//   res.render('index', { header: 'index!'} );
// });

carRouter.get('/', function(req, res) {
  var path   = req.baseUrl + req.path;
  var method = 'GET';
  var action =  'INDEX';
  console.log("%s request to %s, this is the %s action", method, path, action);
  res.json(candies);
});

carRouter.get('/new', function(req, res) {
  var path   = req.baseUrl + req.path;
  var method = 'GET';
  var action =  'NEW';
  console.log("%s request to %s, this is the %s action", method, path, action);
  res.send('index');
});

carRouter.get('/:id', function(req, res) {
  var path   = req.baseUrl + req.path;
  var method = 'GET';
  var action =  'SHOW';
  console.log("%s request to %s, this is the %s action", method, path, action);
  res.send('index');
});


carRouter.post('/', function(req, res) {
  var path   = req.baseUrl + req.path;
  var method = 'POST';
  var action =  'CREATE';
  console.log("%s request to %s, this is the %s action", method, path, action);
  res.send('index');
});

carRouter.get('/:id/edit', function(req, res) {
  var path   = req.baseUrl + req.path;
  var method = 'GET';
  var action =  'EDIT';
  console.log("%s request to %s, this is the %s action", method, path, action);
  res.send('index');
});

carRouter.put('/:id', function(req, res) {
  var path   = req.baseUrl + req.path;
  var method = 'PUT';
  var action =  'UPDATE';
  console.log("%s request to %s, this is the %s action", method, path, action);
  res.send('index');
});

carRouter.delete('/:id', function(req, res) {
  var path   = req.baseUrl + req.path;
  var method = 'DELETE';
  var action =  'DELETE';
  console.log("%s request to %s, this is the %s action", method, path, action);
  res.send('index');
});

app.use("/cars", carRouter);

// Server Started
app.listen(port);
console.log('Server Started');
