// imports express.js framework
const express = require("express");
const router = express();
// const { pool } = require("../db/getPool");
//
//  imports a module named "studentProgressController"
// from the "controllers" directory,
const studentProgressController = require("../controllers/studentProgressController");

// defines a GET route for the "/api/users" endpoint. When a GET request is made to this endpoint,
//  the getUserProjects function from the studentProgress Controller module will be invoked to handle the request.
router.get("/api/userprojects", studentProgressController.getUserProjects);

// exports to the router
module.exports = router;
