const Influx = require('influx');
const config = require('../../config');

function _initDB() {
    return new Influx.InfluxDB({
        host: config.influxdb.host,
        database: config.influxdb.database,
        schema: [
            {
                measurement: config.influxdb.measurement,
                fields: {
                    value: Influx.FieldType.FLOAT
                },
                tags: config.influxdb.tags
            }
        ]
    });
}

async function save(stockName, stockValue) {
    const influx = _initDB();
    return influx.writePoints([{
        measurement: 'stock',
        tags: { stock_name: stockName },
        fields: { value: stockValue }
    }]);
}

async function get(stockName, limit) {
    const influx = _initDB();
    return influx.query(`select * from stock where stock_name = '${stockName}' order by time desc limit ${limit}`);
}

module.exports = {  
    save,
    get
};
