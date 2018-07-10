var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  JenkinsBuilds = require('./api/models/jenkinsBuildsModel'),
  PullRequests = require('./api/models/pullRequestsModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/ci_metrics_db', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var jenkinsBuildsRoutes = require('./api/routes/jenkinsBuildsRoutes'); //importing route
jenkinsBuildsRoutes(app); //register the route

var pullRequestsRoutes = require('./api/routes/pullRequestsRoutes'); //importing route
pullRequestsRoutes(app); //register the route

app.listen(port);

console.log('CI metrics REST API server started on port ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
