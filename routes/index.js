// Express
const express = require("express");
const app = express();

// Routers
const resourceRouter = require("./resourceRouter");
const tokenRouter = require("./tokenRouter");

app.use("/api/v1/resources", resourceRouter);
app.use("/api/v1/getToken", tokenRouter);

module.exports = app;
