# CI Metrics
----------------------------------
This is a ci metrics service providing a rest api to interact with.
It makes use of the following technologies:
- Node.js (node dependency that has to be installed)
- MongoDB (machine dependency that has to be installed)
- Postman (for testing the API)

## Used node modules and why
- express, easy web framework with API support

## Used developing node modules
- nodemon, keeping track of changed files and restarting the server
- mongoose, to interact with mongo-db

## Starting
- mongod --dbpath=data\db
- npm start