const model = require("../models/teacherProfileModel");

module.exports = {
    getTeacherProfileData: async (req, res) => {
        console.log("Teacher profile endpoint hit");
        const result = await model.queryAllTeacherProfile();
        res.status(200).send(result);
    },
    updateTeacherInfo: async (req, res) => {
        console.log("Update endpoint hit");
        console.log(req.body);
        const result = await model.updateTeacherInfo(req.body, req.user_id);
        res.status(200).send(result);
    },
};
