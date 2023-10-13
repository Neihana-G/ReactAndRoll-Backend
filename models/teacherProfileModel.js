const pool = require("../db/getPool");

module.exports = {
    queryAllTeacherProfile: () => {
        const result = pool
            .promise()
            .query("SELECT * FROM teacher")
            .then(([result]) => result)
            .catch((err) => console.log(err));
        return result;
    },
};
