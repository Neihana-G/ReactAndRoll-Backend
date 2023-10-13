const pool = require("../db/getPool");

module.exports = {
  getAllProjects: (req, res) => {
    console.log("/api/projects GET endpoint was hit!");
    pool.query(
      "SELECT NAME, SUBSCRIPTION, ACTIVITY_TYPE, YEAR_LEVEL, SUBJECT_MATTER, DIFFICULTY, images FROM `missio20_2307-L4FT11-team5`.project_library;",
      function (err, result) {
        if (err) return console.log(err);
        console.log(result);
        res.send(result);
      }
    );
  },
};
