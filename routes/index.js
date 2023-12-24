// Express
const express = require("express");
const app = express();

// Routers
const resourceRouter = require("./resourceRouter");

app.use("/api/v1/resources", resourceRouter);

module.exports = app;
