var express    = require("express");
var scraper    = require("./scrape-puppeteer.js");
var app        = express();

app.get('/', async (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log("Started GET '/' for", ip, "at", new Date);
  try {
    const result = await scraper.doScrape();
    res.json(result);
    console.log("Completed");
  } catch (e) {
    console.log("error", e);
  }
})

var server = app.listen(3000, function () {
  console.log("Listening on port %s...", server.address().port, "\n\n");
});
