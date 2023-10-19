const pool = require("../db/getPool");

module.exports = {
    loginStudent: async (email) => {
        const result = await pool
            .promise()
            .execute(
                "SELECT student_id, password FROM studentprofile WHERE email = ?",
                [email]
            )
            .then(([result]) => {
                console.log("student logged in");
                return result;
            })
            .catch((err) => {
                console.log(err);
                return false;
            });
        return result;
    },
    loginTeacher: async (email) => {
        const result = await pool
            .promise()
            .execute(
                "SELECT teacher_id, password FROM teacher WHERE email = ?",
                [email]
            )
            .then(([result]) => {
                console.log("teacher logged in");
                return result;
            })
            .catch((err) => {
                console.log(err);
                return false;
            });
        return result;
    },
    loadStudent: async (id) => {
        const result = await pool
            .promise()
            .execute(
                "SELECT student_id, name, email, school, profile_pic, date_of_birth, contact_number, course FROM studentprofile WHERE student_id = ?",
                [id]
            )
            .then(([result]) => {
                return result;
            })
            .catch((err) => {
                console.log(err);
                return false;
            });
        return result;
    },
    loadTeacher: async (id) => {
        const result = await pool
            .promise()
            .execute(
                "SELECT teacher_id,name, email, school, profile_pic, date_of_birth, contact_number FROM teacher WHERE teacher_id = ?",
                [id]
            )
            .then(([result]) => {
                return result;
            })
            .catch((err) => {
                console.log(err);
                return false;
            });
        return result;
    },
};
