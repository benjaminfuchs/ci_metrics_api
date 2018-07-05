'use strict';

var mongoose = require('mongoose'), JenkinsBuild = mongoose.model('JenkinsBuild');

exports.get_all = function(req, res) {
  JenkinsBuild.find({}, function(err, build) {
    if (err)
      res.send(err);
    res.json(build);
  });
};

exports.add = function(req, res) {
  var new_build = new JenkinsBuild(req.body);
  new_build.save(function(err, build) {
    if (err)
      res.send(err);
    res.json(build);
  });
};

exports.get = function(req, res) {
  JenkinsBuild.findById(req.params.buildId, function(err, build) {
    if (err)
      res.send(err);
    res.json(build);
  });
};

exports.delete = function(req, res) {
  JenkinsBuild.remove({
    _id: req.params.buildId
  }, function(err, build) {
    if (err)
      res.send(err);
    res.json({ message: 'Jenkins Build successfully deleted' });
  });
};