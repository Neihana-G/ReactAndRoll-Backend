const pool = require("../db/getPool");

module.exports = {
    queryAllHelpRequests: () => {
        const result = pool
            .promise()
            .query(
                "SELECT name, profile_pic, date_created, done FROM studentprofile sp JOIN help_request hr ON hr.student_id = sp.student_id WHERE done = 0"
            )
            .then(([result]) => result)
            .catch((err) => console.log(err));
        return result;
    },
    markDoneHelpRequests: (student_ids) => {
        console.log(student_ids);
        const result = pool
            .promise()
            .query(
                `UPDATE help_request SET done = 1 WHERE student_id IN ${student_ids}`
            )
            .then(([result]) => result)
            .catch((err) => console.log(err));
        return result;
    },
};
