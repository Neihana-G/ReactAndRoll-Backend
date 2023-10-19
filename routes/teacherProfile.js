const express = require("express");
const teacherProfileController = require("../controllers/teacherProfileController");
const verifyTeacher = require("../middleware/verifyTeacher");
const router = express();

//Gets all help requests from db
router
    .get("/api/teacher_profile", teacherProfileController.getTeacherProfileData)
    .post(
        "/api/update-teacher-profile",
        verifyTeacher,
        teacherProfileController.updateTeacherInfo
    );

module.exports = router;
