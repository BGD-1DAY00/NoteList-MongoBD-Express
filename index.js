const express = require("express");
const path = require("path");
const { connect } = require("./db.js");
const app = express();
const { router } = require("./routes");

connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", router);

const PORT = 5510;

app.listen(PORT, console.log("ran"));
