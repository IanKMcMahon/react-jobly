"use strict";
/** Database setup for jobly. */

const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

const client = new Client({ user: "ian_mcmahon", password: "cascadia8", host: "localhost", database: "jobly", port: '5432' });
console.log(client)
client.connect();



module.exports = client;