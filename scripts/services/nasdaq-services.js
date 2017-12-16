const request = require('request');
const cheerio = require('cheerio');

async function getCurrentIndex() {
    return new Promise((resolve, reject) => {
        const url = 'http://www.nasdaq.com/';
        request(url, (error, response, html) => {
            if (!error) {
                const $ = cheerio.load(html);
                const data = $('#indexTable script').html();
                const lines = data.split('\n');
                lines.forEach((element) => {
                    if (element.indexOf('nasdaqHomeIndexChart.storeIndexInfo("NASDAQ"') > -1) {
                        const tokens = element.split(',');
                        resolve(Number(tokens[1].substr(1, tokens[1].length - 2)));
                    }
                });
            } else {
                reject(error);
            }
        });
    });
}

module.exports = {  
    getCurrentIndex
};
