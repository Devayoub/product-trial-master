# Appointement REST API

## Prerequisites

- NodeJS (v20)
- Docker

## Configuration

Configuration for the application is at `config/default.js` and `config/production.js`.
The following parameters can be set in config files or in env variables:

- PORT: the server port
- API_PREFIX: the API path prefix
- MONGODB_URI: Mongo DB URI
- ACCESS_TOKEN_LIFETIME: The access token lifetime
- JWT_SECRET: the JWT secret

# Database setup:

To setup the database, execute the following commands:

1. `cd db-docker`
2. `docker-compose up -d`

This will start MongoDB on docker.

  
## Check code style

1. `npm run lint`
2. `npm run lint:fix`

## Starting the application

- Start app `npm start`
- App is running at `http://localhost:3000`

##  API Validation & Test

1. Make sure Newman is installed globally, or import the docs/collection.json file into Postman.

2. To run the tests using Newman, execute the following command: "npm run test"