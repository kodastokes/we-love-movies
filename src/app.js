if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const moviesRouter = require("./movies/movies.router");


app.use(cors());

app.use("/movies", moviesRouter)

app.use(notFound);
app.use(errorHandler);

module.exports = app;
