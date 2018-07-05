'use strict';

var mongoose = require('mongoose'), PullRequest = mongoose.model('PullRequest');

exports.get_all = function(req, res) {
  PullRequest.find({}, function(err, pr) {
    if (err)
      res.send(err);
    res.json(pr);
  });
};

exports.add = function(req, res) {
  var new_pull_request = new PullRequest(req.body);
  new_pull_request.save(function(err, pr) {
    if (err)
      res.send(err);
    res.json(pr);
  });
};

exports.get = function(req, res) {
  PullRequest.findById(req.params.buildId, function(err, pr) {
    if (err)
      res.send(err);
    res.json(pr);
  });
};

exports.delete = function(req, res) {
  PullRequest.remove({
    _id: req.params.buildId
  }, function(err, pr) {
    if (err)
      res.send(err);
    res.json({ message: 'Pull Request successfully deleted' });
  });
};