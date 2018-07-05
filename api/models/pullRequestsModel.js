'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PullRequestSchema = new Schema({
  created: {
    type: Date
  },
  merged: {
    type: Date,
    default: Date.now
  },
  source: {
    type: String,
    required: 'The source branch of the pull-request is required!'
  },
  target: {
    type: String,
    required: 'The target branch of the pull-request is required!'
  },
  repository: {
    type: String,
    required: 'The repository name is required!'
  }
});

module.exports = mongoose.model('PullRequest', PullRequestSchema);