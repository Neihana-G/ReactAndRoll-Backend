const pool = require("../db/getPool");

module.exports = {
  getAllUsers: async (req, res) => {
    console.log(" /api/USERS endpoint is hit yo!");
    pool.query(
      "SELECT name, profile_pic FROM studentprofile ; ",
      function (err, result) {
        if (err) return console.log(err);
        // const result = pool
        // .promise()
        // .query("SELECT * FROM studentprofile")
        // .then(([result]) => result)
        // .catch((err) => console.log(err));
        res.status(200).send(result);
        // console.log("promise completed");

        // try {
        // const [result] = await pool
        // .promise()
        // .query("SELECT * FROM studentprofile");
        // res.status(200).send(result);
        // console.log("promise completed");
        // } catch (err) {
        // console.log(err);
        // res.status(500).send("Internal Server Error");
        // }
      }
    );
  },
};
