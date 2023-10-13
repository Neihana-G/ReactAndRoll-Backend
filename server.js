const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
// const { getPool } = require("./db/getPool");
const homePageRoute = require("./routes/homePageTest");
const helpRequests = require("./routes/helpRequests");
const projectLibrary = require("./routes/projectLibrary");
const teacherProfile = require("./routes/teacherProfile");
require("dotenv").config();
const app = express();

port = process.env.PORT || 4000;

//------ MIDDLEWARE ------//
app.use(express.json());
app.use(cors());

//---- DB CONNECTION ----//
// const pool = getPool();
//
//------ ROUTES ------//
app.use(helpRequests);
app.use(projectLibrary);
app.use(teacherProfile);

app
  .listen(port, () => {
    console.log(`Server live at http://localhost:${port}`);
  })
  .on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.log(
        "Port is already in use, try a different port or close already running servers"
      );
    } else {
      console.log("Server error: ", error);
    }
  });
