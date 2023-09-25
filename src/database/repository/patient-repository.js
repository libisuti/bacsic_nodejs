const mongoose = require("mongoose");
const { PatientModel } = require("../../database/models");

class PatientRepository {
  async CreatePatient({
    first_name,
    last_name,
    nationality,
    gender,
    address,
    date_of_birth,
    phone,
    email,
  }) {
    const patient = new PatientModel({
      first_name,
      last_name,
      nationality,
      gender,
      address,
      date_of_birth,
      phone,
      email,
    });
    const patientResult = await patient.save();
    return patientResult;
  }

  async GetPatient() {
    return await PatientModel.find();
  }
}

module.exports = PatientRepository;
