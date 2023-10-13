const express = require("express");
const router = express.Router();
const projectLibraryController = require("../controllers/projectLibraryController");

router.get("/api/projects", projectLibraryController.getAllProjects);

module.exports = router;
