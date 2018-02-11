/**
 * How to run in Google Cloud Functions
 * https://mhaligowski.github.io/blog/2017/05/15/serving-functions-express.html
 */

var express    = require("express");
var runScraper = require('./scrape-api.js');
var app        = express();

app.get('/', runScraper);

var server = app.listen(3000, function () {
  console.log("Listening on port %s...", server.address().port, "\n\n");
});
