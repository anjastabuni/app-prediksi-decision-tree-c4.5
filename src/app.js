const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connoctDB = require("./config/db");
const studentRoutes = require("./routes/studentRouter");

require("dotenv").config();

const app = express();
connoctDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/students", studentRoutes);

module.exports = app;
