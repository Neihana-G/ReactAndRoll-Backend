const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyTeacher = (req, res, next) => {
    const token = req.headers["x-access-token"];
    console.log("testing");
    if (!token) {
        res.status(401).send("No auth token provided");
    } else {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.status(401).json({
                    auth: false,
                    message: "You failed to be authenticated",
                });
            } else {
                if (decoded.teacher_id) {
                    req.user_id = decoded.teacher_id;
                    next();
                } else {
                    res.status(401).json({
                        auth: false,
                        message: "You are not a teacher",
                    });
                    console.log("error");
                }
            }
        });
    }
};

module.exports = verifyTeacher;
