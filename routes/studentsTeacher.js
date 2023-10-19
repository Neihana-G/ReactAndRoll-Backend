const express = require("express");
const router = express.Router();
const studentsTeacherController = require("../controllers/studentsTeacherController");

router.get("/api/student-teacher", studentsTeacherController.getTeacherName);

module.exports = router;
