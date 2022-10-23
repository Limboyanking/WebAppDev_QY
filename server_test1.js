


const configureMongo = require('./app/config/db');
const express = require("express");
const db = configureMongo();
const app = express();
app.set("port", 4000);

module.exports = app;
console.log('Server running at http://localhost:4000/');
