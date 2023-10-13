const model = require("../models/teacherProfileModel");

module.exports = {
    getTeacherProfileData: async (req, res) => {
        console.log("Teacher profile endpoint hit");
        const result = await model.queryAllTeacherProfile();
        res.status(200).send(result);
    },
};
