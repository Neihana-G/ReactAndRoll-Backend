const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
// const { getPool } = require("./db/getPool");
const homePageRoute = require("./routes/homePageTest");
const helpRequests = require("./routes/helpRequests");
const studentProfiles = require("./routes/studentProfiles");
const studentProgress = require("./routes/studentProgress");
const projectLibrary = require("./routes/projectLibrary");
const teacherProfile = require("./routes/teacherProfile");
const signUp = require("./routes/signUp");
const login = require("./routes/login");

require("dotenv").config();
const app = express();

port = process.env.PORT || 4000;

//------ MIDDLEWARE ------//
const corsOptions = {
    origin: [
        "http://localhost:3000",
        "http://192.168.1.121:3000",
        // your origins here
    ],
    allowedHeaders: ["x-access-token", "Content-Type"],
    credentials: true,
};
app.use(express.json());
app.use(cors(corsOptions));

//
//------ ROUTES ------//
app.get("/", (req, res) => {
    res.send("test");
});
app.use(helpRequests);
app.use(studentProfiles);
app.use(studentProgress);
app.use(projectLibrary);
app.use(teacherProfile);
app.use(signUp);
app.use(login);

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
