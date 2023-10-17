const pool = require("../db/getPool");

module.exports = {
  getUserProjects: async (req, res) => {
    console.log("/api/USERPROJECTS endpoint is hit yo!");

    // SQL query to select the desired data
    const sqlQuery = `
    SELECT studentprofile.student_id, COUNT(*) AS completed_projects, studentprofile.name
    FROM student_projects
    JOIN studentprofile ON student_projects.student_id = studentprofile.student_id
    WHERE student_projects.submission = 'Completed'
    GROUP BY studentprofile.student_id, studentprofile.name;
    `;

    pool.query(sqlQuery, function (err, result) {
      if (err) return console.log(err);

      res.status(200).send(result);
    });
  },
};
