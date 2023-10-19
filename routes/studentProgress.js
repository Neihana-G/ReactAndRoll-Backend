const express = require("express");
const router = express();
// const { pool } = require("../db/getPool");
const studentProgressController = require("../controllers/studentProgressController");
// users Endpoint
router.get("/api/userprojects", studentProgressController.getUserProjects);

module.exports = router;
