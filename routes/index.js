// Express
const express = require("express");
const app = express();

// Routers
const resourceRouter = require("./resourceRouter");
const tokenRouter = require("./tokenRouter");
const userRouter = require("./userRouter");
const chatRouter = require("./chatRouter");

app.use("/api/v1/resources", resourceRouter);
app.use("/api/v1/getToken", tokenRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/chat", chatRouter);

module.exports = app;
