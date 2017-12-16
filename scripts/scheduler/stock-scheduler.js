const schedule = require('node-schedule');
const nasNaqService = require('../services/nasdaq-services');
const influxService = require('../services/influx-services');
const config = require('../../config');

function initScheduler() {
    schedule.scheduleJob(config, () => {
        console.log('fetching from Nasdaq');
        nasNaqService.getCurrentIndex()
            .then((result) => {
                console.log(`the current value = ${result}`);
                influxService.save('NASDAQ', result);          
            })
            .catch((error) => {
                console.error(error);
            });
    });
}

module.exports = {
    initScheduler
};
