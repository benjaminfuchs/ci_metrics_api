'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JenkinsBuildSchema = new Schema({
  type: {
    type: String,
    required: 'Type of the build is required!',
    enum: ['pull_request', 'branch', 'develop', 'release', 'other']
  },
  date: {
    type: Date,
    default: Date.now
  },
  result: {
    type: String,
    required: 'Result of the build is required!',
    enum: ['success', 'fail']
  },
  url: {
    jenkins: {
      type: String,
      required: 'URL of the jenkins is required!'
    },
    build: String
  },
  fail: {
    stage: String,
    node: String,
    message: String
  },
  duration: Number
});

module.exports = mongoose.model('JenkinsBuild', JenkinsBuildSchema);