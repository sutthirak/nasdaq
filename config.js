const config = {
    corn: '*/1 * * * *',
    influxdb: {
        host: 'localhost',
        database: 'stocks',
        measurement: 'stock',
        tags: ['stock_name']
    }
};

module.exports = config;
