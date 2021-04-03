// Importing the controller
var dataCt = require('./controller/data-ct');

//initialize express router
let router = require('express').Router();

//set default API response
router.get('/newspaper/list', dataCt.getNews);
router.get('/promotion/list', dataCt.getAdvertisement);

//Exporting API routes
module.exports = router;