# Nasdaq App

Nasdaq App use Node.js version 8.9.3. and [InfluxDB](https://www.influxdata.com) as database
This Application will fetch the latest NASDAQ stock information from the website and store in the database in every 1 minute (Default)
You can change the scheduling time and database connection in the `config.js` file.

## Installation

install the dependencies with this command

```
npm install
npm install gulp mocha -g
```

## Setting up InfluxDB

I recommend for setting up InfluxDB with docker. Use this command for starting it.

```
docker run -p 8086:8086 -v $PWD:/var/lib/influxdb -e INFLUXDB_DB=stocks influxdb
```
Checking data in the database with HTTP request.

```
curl -GET 'http://localhost:8086/query?pretty=true' --data-urlencode "db=stocks" --data-urlencode "q=SELECT \"value\" FROM \"stock\" WHERE \"stock_name\"='NASDAQ'"
```

## Starting the application

run this following command.

```
npm start
```

REST enpoint for NASDAQ

```
http://localhost:3000/stocks/nasdaq
```

## Testing the application with Mocha

All of test cases is in directory `tests`. 
Use this command for running the test cases. It will check any changed in directory `scripts` automaticaly by watching it.

```
npm test
```

## Checking code quality with ESLint

This following command will start Gulp with ESLint for checking the code.
 It will check any changed in directory `scripts` automaticaly by watching it

```
npm lint
```