'use strict';
module.exports = function(app) {
  var pullRequests = require('../controllers/pullRequestsController');

  // jenkins builds routes
  app.route('/pull-requests')
    .get(pullRequests.get_all)
    .post(pullRequests.add);

  app.route('/pull-requests/:pullRequestId')
    .get(pullRequests.get)
    .delete(pullRequests.delete);
};