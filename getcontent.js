const request = require('request');
const cheerio = require('cheerio');

request('https://www.meteocity.com/france/lille-v2998324', (error, response, html) => {
    if(!error && response.statusCode == 200) {
      // if the error message is 200 the page is loaded correctly
        const $ = cheerio.load(html);
        // i'm loading the content of the url
        const test = $("meta[property='og:title']")
        // i'm filtering the meta tag by the value of its property attribute
        console.log(test.attr('content'))
        // i'm just selecting the value of the content attibute 
      }
})
