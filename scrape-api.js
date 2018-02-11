var scraper    = require("./scrape-puppeteer.js");

module.exports = async function runScraper(req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log("Started GET '/' for", ip, "at", new Date);
  try {
    const result = await scraper.doScrape();
    res.json(result);
    console.log("Completed");
  } catch (e) {
    console.log("error", e);
  }
}
