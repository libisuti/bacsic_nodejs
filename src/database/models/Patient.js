const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
patientSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

patientSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Patient", patientSchema);
