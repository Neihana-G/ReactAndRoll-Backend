const pool = require("../db/getPool");

module.exports = {
  getAllUsers: async (req, res) => {
    console.log(" /api/USERS endpoint is hit yo!");
    pool.query(
      "SELECT name, profile_pic FROM studentprofile ; ",
      function (err, result) {
        if (err) return console.log(err);
        res.status(200).send(result);
      }
    );
  },
};
