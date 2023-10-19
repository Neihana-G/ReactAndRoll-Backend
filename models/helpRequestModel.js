const pool = require("../db/getPool");

module.exports = {
  queryAllHelpRequests: () => {
    const result = pool
      .promise()
      .query(
        "SELECT request_id, name, profile_pic, date_created, done FROM studentprofile sp JOIN help_request hr ON hr.student_id = sp.student_id WHERE done = 0"
      )
      .then(([result]) => result)
      .catch((err) => console.log(err));
    return result;
  },
  newHelpRequest: (student_id) => {
    const result = pool
      .promise()
      .query(`INSERT INTO help_request VALUE (null,${student_id}, NOW(), 0);`)
      .then(([result]) => result)
      .catch((err) => console.log(err));
    return result;
  },
  markDoneHelpRequests: (request_ids) => {
    const result = pool
      .promise()
      .query(
        `UPDATE help_request SET done = 1 WHERE request_id IN ${request_ids}`
      )
      .then(([result]) => result)
      .catch((err) => console.log(err));
    return result;
  },
};
