const mongoose = require("mongoose");
const { DB_URL } = require("../../src/config");

module.exports = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "Patient",
    });
    console.log("Db Connected");
  } catch (error) {
    console.log("Error ============");
    console.log(error);
  }
};
