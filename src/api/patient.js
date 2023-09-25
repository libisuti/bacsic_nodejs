const express = require("express");
const app = express();
const PatientService = require("../services/Patient-service");
const service = new PatientService();

app.post("/patient/create", async (req, res) => {
  const {
    first_name,
    last_name,
    nationality,
    gender,
    address,
    date_of_birth,
    phone,
    email,
  } = req.body;
  // validation
  const { data } = await service.CreatePatient({
    first_name,
    last_name,
    nationality,
    gender,
    address,
    date_of_birth,
    phone,
    email,
  });
  return res.json(data);
});

app.get("/patient", async (req, res) => {
  try {
    const { data } = await service.GetPatient();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ error });
  }
});

module.exports = app;
