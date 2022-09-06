const Route = require("express")();

Route.use("/v1/", require("./v1"));

module.exports = Route;

