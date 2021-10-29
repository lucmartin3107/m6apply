const https = require('https');
const cheerio = require('cheerio');


https.get('https://www.meteocity.com/france/lille-v2998324', (res) => {
  res.on('data', (d) => {
    let html=d.toString()
    const $ = cheerio.load(html);
    const test = $("meta[property='og:title']")
    if (test.attr('content') !== undefined) {
      console.log(test.attr('content'))
    }
});
})


