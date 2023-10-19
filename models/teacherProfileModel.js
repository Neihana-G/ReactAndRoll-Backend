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
    updateTeacherInfo: async (updateData, teacher_id) => {
        const setValues = [];
        const setParams = [];

        for (const key in updateData) {
            if (key == "date_of_birth") {
                setValues.push(`${key} = DATE( ? )`);
            } else {
                setValues.push(`${key} = ?`);
            }

            setParams.push(updateData[key]);
        }

        const updateQuery = `UPDATE teacher SET ${setValues.join(
            ", "
        )} WHERE teacher_id = ${teacher_id}`;
        console.log(updateQuery);
        console.log(setParams);
        const result = await pool
            .promise()
            .execute(updateQuery.toString(), setParams)
            .then(([result]) => {
                console.log("Updated info for teacher");
                return result;
            })
            .catch((err) => {
                console.log(err);
                return false;
            });
        return result;
    },
};
