const model = require("../models/loginModel");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
require("dotenv").config();

module.exports = {
    signinStudent: async (req, res) => {
        const { password, email } = req.body;

        console.log("Login User endpoint hit");
        const result = await model.loginStudent(email);
        console.log(result);
        if (!result.length) {
            res.status(401).send({ message: "Email does not exist." });
            console.log("An error happened didnt it");
        } else {
            const { student_id, password: hashed_pass } = result[0];

            const token = jwt.sign(
                { student_id, userState: "student" },
                process.env.SECRET_KEY,
                {
                    expiresIn: 1500,
                }
            );
            console.log(student_id, hashed_pass);

            bcrypt
                .compare(password, hashed_pass)
                .then(function (result) {
                    if (result) {
                        res.json({
                            auth: true,
                            token: token,
                            userState: "student",
                            result: student_id,
                            message: "Login successful",
                        });
                    } else {
                        console.log("Invalid credentials");
                        res.status(401).send({
                            message: "Invalid log in credentials",
                        });
                    }
                })
                .catch((err) => {
                    res.status(500).json({ Message: err });
                });
        }
    },
    signinTeacher: async (req, res) => {
        const { password, email } = req.body;

        console.log("Login User endpoint hit");
        const result = await model.loginTeacher(email);
        console.log(result);
        if (!result.length) {
            res.status(401).send({ message: "Email does not exist." });
            console.log("An error happened didnt it");
        } else {
            const { teacher_id, password: hashed_pass } = result[0];

            const token = jwt.sign(
                { teacher_id, userState: "teacher" },
                process.env.SECRET_KEY,
                {
                    expiresIn: 1500,
                }
            );
            console.log(teacher_id, hashed_pass);

            bcrypt
                .compare(password, hashed_pass)
                .then(function (result) {
                    if (result) {
                        res.json({
                            auth: true,
                            token: token,
                            userState: "teacher",
                            result: teacher_id,
                            message: "Login successful",
                        });
                    } else {
                        console.log("Invalid credentials");
                        res.status(401).send({
                            message: "Invalid log in credentials",
                        });
                    }
                })
                .catch((err) => {
                    res.status(500).json({ Message: err });
                });
        }
    },
    loadUser: async (req, res) => {
        const user_id = req.user_id;
        const userState = req.userState;
        var result;
        if (userState === "teacher") {
            result = await model.loadTeacher(user_id);
        } else if (userState === "student") {
            result = await model.loadStudent(user_id);
        }
        res.status(200).send({ Auth: true, userState, result });
    },
};
