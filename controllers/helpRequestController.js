const model = require("../models/helpRequestModel");

module.exports = {
    loadHelpRequests: async (req, res) => {
        console.log("Load requests endpoint hit");
        const result = await model.queryAllHelpRequests();
        res.status(200).send(result);
    },
    newHelpRequest: async (req, res) => {
        console.log("Mark as done endpoint reached");

        const student_id = req.body.student_id;

        const result = await model.newHelpRequest(student_id);
        res.status(200).send(result);
    },

    markRequestAsDone: async (req, res) => {
        console.log("Mark as done endpoint reached");

        const request_ids = req.body.request_ids;
        const idsAsString = Array.isArray(request_ids)
            ? `(${request_ids.map((id) => id)})`
            : "()";

        const result = await model.markDoneHelpRequests(idsAsString);
        res.status(200).send(result);
    },
};
