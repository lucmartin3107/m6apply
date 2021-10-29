const cheerio = require('cheerio');
const axios = require('axios');

axios({
  method: 'get',
  url: 'https://www.meteocity.com/france/lille-v2998324',
  
})
  .then(function (response) {
    const html = response.data
    const $ = cheerio.load(html);
    const test = $("meta[property='og:title']")
    if (test.attr('content') !== undefined) {
      console.log(test.attr('content'))
    }
  })