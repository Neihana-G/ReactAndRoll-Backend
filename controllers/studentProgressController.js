// this exports a database connection pool, which is stored in the pool variable.
// This pool is used to execute SQL queries.
const pool = require("../db/getPool");

// This module exports object exports the function that
// handles the "getUserProjects" endpoint.
module.exports = {
  getUserProjects: async (req, res) => {
    console.log("/api/USERPROJECTS endpoint is hit yo!");

    // this SQL query string selects data from the database. It counts the number of completed projects for each
    // student and includes their student_id and name. The SQL query is enclosed in a template literal for readability.
    const sqlQuery = `
    SELECT studentprofile.student_id, COUNT(*) AS completed_projects, studentprofile.name
    FROM student_projects
    JOIN studentprofile ON student_projects.student_id = studentprofile.student_id
    WHERE student_projects.submission = 'Completed'
    GROUP BY studentprofile.student_id, studentprofile.name;
    `;
    // This below executes the SQL query using the database connection pool
    // stored in the pool variable. It uses the query method to send the SQL query to the database.
    pool.query(sqlQuery, function (err, result) {
      if (err) return console.log(err);

      res.status(200).send(result);
    });
  },
};
