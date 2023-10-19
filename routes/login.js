const express = require("express");
const verifyJWT = require("../middleware/jwt");
const loginController = require("../controllers/loginController");
const router = express();

//Marks help request as done
router.post("/api/login-student", loginController.signinStudent);
router.post("/api/login-teacher", loginController.signinTeacher);
router.get("/api/load-user", verifyJWT, loginController.loadUser);

module.exports = router;
