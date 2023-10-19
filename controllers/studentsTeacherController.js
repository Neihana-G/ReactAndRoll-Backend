const pool = require("../db/getPool");

module.exports = {
  getTeacherName: (req, res) => {
    pool.query(
      "SELECT studentprofile.teacher_id, teacher.name FROM studentprofile JOIN teacher ON studentprofile.teacher_id = teacher.teacher_id",

      function (err, result) {
        if (err) return console.log(err);
        console.log(result);
        res.send(result);
      }
    );
  },
};
