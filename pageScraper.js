const scraperObject = {
  url: "https://www.greggs.co.uk/menu",
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    // Navigate to the selected page
    await page.goto(this.url);
    // Wait for the required DOM to be rendered
    await page.waitForSelector(".mt-24");
    console.log("hi");
    // Get the link to all the required books
    let urls = await page.$eval(".text-xl", (e) => {
      console.log("div", e.outerHTML);
      return e.outerHTML;
    });
    console.log(urls);
  },
};

module.exports = scraperObject;
