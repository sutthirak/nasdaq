const express = require('express');

const router = express.Router();

const influxService = require('../services/influx-services');

/* GET home page. */
router.get('/', (req, res, next) => { // eslint-disable-line no-unused-vars
    res.render('index', { title: 'NASDAQ App' });
});

/* GET stock information */
router.get('/stocks/nasdaq', (req, res, next) => { // eslint-disable-line no-unused-vars
    influxService.get('NASDAQ', 1000)
        .then((stockValues) => {
            res.setHeader('Content-Type', 'application/json');
            res.send(stockValues);
        })
        .catch(error => console.log(error));
});

module.exports = router;
