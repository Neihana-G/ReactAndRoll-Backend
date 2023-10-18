const pool = require('../db/getPool');
const { use } = require('../routes/login');


module.exports = {
    loginStudent: async (email) => {
      const result = await pool
        .promise()
        .execute(
            "SELECT student_id, password FROM student_profiles WHERE email = ?", [email]
        )
        .then(([result]) => {
          console.log('student logged in')
            return result
        })
        .catch((err) => {
            console.log(err)
            return false
        });
      return result;
    },
    loginTeacher: async (email) => {
      const result = await pool
        .promise()
        .execute(
            "SELECT teacher_id, password FROM teacher WHERE email = ?", [email]
        )
        .then(([result]) => {
            console.log('teacher logged in')
            return result
        })
        .catch((err) => {
            console.log(err)
            return false
        });
      return result;
    },
    // loadUser: async (isStudent, user_id) => {
    //   const user_id = req.body.user_id
    //   let id = ''
    //   let table = ''
    //   if(isStudent){
    //     id = 'student_id'
    //     table = 'student_profiles'
    //   }else{
    //     id = 'teacher_id'
    //     table = 'teacher'
    //   }

    //   const result = await pool
    //     .promise()
    //     .execute(
    //         "SELECT * FROM ? WHERE ? = ?", [table, id, user_id]
    //     )
    //     .then(([result]) => {
    //         return result
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //         return false
    //     });
    //   return result;
    // }
  };
  