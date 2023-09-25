const { PatientRepository } = require("../database");
const { FormateData } = require("../ultis");

class PatientService {
  constructor() {
    this.repository = new PatientRepository();
  }

  async CreatePatient(patientInputs) {
    const patientResult = await this.repository.CreatePatient(patientInputs);
    return FormateData(patientResult);
  }

  async GetPatient() {
    const patient = await this.repository.GetPatient();
    return FormateData({
      patient,
    });
  }
}

module.exports = PatientService;
