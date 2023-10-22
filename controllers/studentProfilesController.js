const pool = require("../db/getPool");

module.exports = {
  //exports an object containing property getallusers refer to asynchronus func
  getAllUsers: async (req, res) => {
    console.log(" /api/USERS endpoint is hit yo!");
    pool.query(
      "SELECT name, profile_pic FROM studentprofile ; ",
      //uses the query method of the database connection pool (pool) to execute an SQL query.
      // The SQL query selects the name and profile_pic columns from the "studentprofile" table.
      function (err, result) {
        if (err) return console.log(err);
        res.status(200).send(result);
      }
    );
  },
};

//
