'use strict';
module.exports = function(app) {
  var jenkinsBuilds = require('../controllers/jenkinsBuildsController');

  // jenkins builds routes
  app.route('/builds')
    .get(jenkinsBuilds.get_all)
    .post(jenkinsBuilds.add);

  app.route('/builds/:buildId')
    .get(jenkinsBuilds.get)
    .delete(jenkinsBuilds.delete);
};