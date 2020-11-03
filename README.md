# mongoose-connection-pool-benchmark

This repo contains a simple setup for running a benchmark using mongoose connection pool size.

It uses:

- [Fastify](https://www.fastify.io/) to run a HTTP server exposing one route to read and one to create data
- docker-compose to easily run MongoDB in docker
- [autocannon](https://github.com/mcollina/autocannon) to load test the HTTP server

## Setup

- `npm i`
- `docker-compose up -d` to run MongoDB in docker
- `npm start` to run the application with the default connection pool size of 5
- `npm run create:data` to create 100 documents in the DB
- `npm run autocannon` to load test the application

## Playing around

- `npm start -- --poolSize 10` to change the pool size
- `npm run autocannon` again to test the application again with a different pool size
- `npm run create:data` again (possibly multiple times) to create additional data in the db
