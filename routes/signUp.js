const express = require("express");
const signUpController = require("../controllers/signUpController");
const router = express();


//Marks help request as done
router.post("/api/sign-up-student", signUpController.signUpStudent);
router.post("/api/sign-up-teacher", signUpController.signUpTeacher);

module.exports = router;