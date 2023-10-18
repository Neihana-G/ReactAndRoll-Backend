const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];
    console.log('Verify toke endpoint hit')
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
                req.user_id = decoded.student_id || decoded.teacher_id
                req.userState = decoded.userState
                console.log(req.user_id, req.userState)
                next();
            }
        });
    }
};

module.exports = verifyJWT;

