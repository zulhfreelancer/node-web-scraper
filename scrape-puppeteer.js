const puppeteer = require('puppeteer');

let scrape = async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto('https://eth.remitano.com/my');
  await page.waitFor(1000);

  const result = await page.evaluate(() => {
    const q = "#body_content > div > div.main.ng-scope > div > div > div > section > div > div > div.col-lg-6.intro-tex > div.row.content.price-content.text-center > div:nth-child(1) > strong";

    let str   = document.querySelector(q).innerText; // contains comma and MYR i.e. '3,500 MYR'
    let price = parseInt(str.replace(/\D/g, ''), 10) / 100.0; // i.e. 3500.00 (integer)
    return { price }
  });

  browser.close();
  return result;
};


module.exports = {

  doScrape() {
    return new Promise(resolve => {
      scrape().then((value) => {
        resolve(value);
      });
    });
  }

};
