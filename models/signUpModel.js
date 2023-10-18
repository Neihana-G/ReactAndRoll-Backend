const pool = require('../db/getPool')


module.exports = {
    signUpStudent: async (name, email, password) => {
      const result = await pool
        .promise()
        .execute(
          "INSERT INTO student_profiles (student_id, name, email, password) VALUES (null, ?, ?, ?)", [name, email, password]
        )
        .then(([result]) => {
            return {status: 200, result, message: "Account created successfully"}
        })
        .catch((err) => {
            console.log(err.errno)
            return {status: 401, message: 'Email already exists'}
        });
      return result;
    },
    signUpTeacher: async (name, email, password) => {
      const result = await pool
        .promise()
        .execute(
          "INSERT INTO teacher (teacher_id, name, email, password) VALUES (null, ?, ?, ?)", [name, email, password]
        )
        .then(([result]) => {
            return {status: 200, result, message: "Account created successfully"}
        })
        .catch((err) => {
            console.log(err.errno)
            return {status: 401, message: 'Email already exists'}
        });
      return result;
    },
  };
  