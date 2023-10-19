const express = require("express");
const router = express();
// const { pool } = require("../db/getPool");
const studentProfilesController = require("../controllers/studentProfilesController");
// users Endpoint
router.get("/api/users", studentProfilesController.getAllUsers);

module.exports = router;
