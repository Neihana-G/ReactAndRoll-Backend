const express = require("express");
const router = express();
// const { pool } = require("../db/getPool");
const studentProfilesController = require("../controllers/studentProfilesController");
//  imports a module named "studentProfilesController" from the "controllers" directory
//
//  defines a GET route for the "/api/users" endpoint. When a GET request is made to
// this endpoint, the getAllUsers function from the studentProfilesController module will be invoked to handle the request.
router.get("/api/users", studentProfilesController.getAllUsers);

module.exports = router;
