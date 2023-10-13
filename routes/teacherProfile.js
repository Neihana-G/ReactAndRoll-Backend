const express = require("express");
const teacherProfileController = require("../controllers/teacherProfileController");
const router = express();

//Gets all help requests from db
router.get(
    "/api/teacher_profile",
    teacherProfileController.getTeacherProfileData
);

module.exports = router;
