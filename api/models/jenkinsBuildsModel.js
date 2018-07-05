'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JenkinsBuildSchema = new Schema({
  type: {
    type: String,
    required: 'Type of the build is required!',
    enum: ['pr', 'branch', 'develop', 'release', 'other']
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
    type: String,
    required: 'URL of the build is required!'
  }
});

module.exports = mongoose.model('JenkinsBuild', JenkinsBuildSchema);