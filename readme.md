# CI Metrics
------------------
This is a ci metrics database providing a REST API to interact with.
------------------

## Requirements
* Node.js
* MongoDB
* Reachable port (e.g. 3000)
------------------

## Node modules
* express, easy web framework with API support
* mongoose, to interact with mongo-db
------------------

## Node modules (development)
* nodemon, keeping track of changed files and restarting the server
------------------

## Execution
* `./mongod --dbpath=data\db`
* `./npm start`
------------------

## API
* Jenkins Builds
    * `GET /builds` A list of all Jenkins builds
    * `POST /builds` Add a new builds
    * `GET /builds/:id` Gets the build with id
    * `DELETE /builds/:id` Deletes the builds with id
* Pull Requests
    * `GET /pull-requests` A list of all merged pull-requests
    * `POST /pull-requests` Add a new merged pull-request
    * `GET /pull-requests/:id` Gets the pull-request with id
    * `DELETE /pull-requests/:id` Deletes the pull-request with id
------------------

## Data structure
* Jenkins Build
    * `type`, enum, (pull_request, branch, develop, release, other)
    * `date`, default is post date
    * `result`, enum (success, fail)
    * `jenkins`, jenkins url
    * OPTIONAL `build_url`, the builds url
    * OPTIONAL `fail_stage`, the stage that failed
    * OPTIONAL `fail_node`, the node that failed
    * OPTIONAl `fail_message`, the fail message
    * OPTIONAL `duration`, the duration in seconds
* Pull-Request
    * `source`, the source branch
    * `target`, the target branch
    * `repository`, the repository name
    * `merged`, the date of being merged, default is post time
    * OPTIONAL `created`, the date of the pull-request creation