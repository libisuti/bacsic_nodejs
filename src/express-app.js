const express = require("express");
const cors = require("cors");
const { patient } = require("../src/api/index");

module.exports = (app) => {
  app.use(express.json());
  app.use(cors());

  app.use(patient);
};
