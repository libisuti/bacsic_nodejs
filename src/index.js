const express = require("express");
const { PORT } = require("../src/config");
const { databaseConnection } = require("../src/database");
const expressApp = require("../src/express-app");
const StartServer = async () => {
  const app = express();

  await databaseConnection();

  expressApp(app);
  app
    .listen(PORT, () => {
      console.log(`listening to port ${PORT}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};

StartServer();
