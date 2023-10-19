const model = require("../models/signUpModel");
const bcrypt = require('bcrypt')
const salt_rounds = 11;

module.exports = {
    signUpStudent: async (req, res) => {
        const { name, password, email } = req.body;

        const hashedPass = await bcrypt
            .hash(password, salt_rounds)
            .then((res) => res)
            .catch((err) => console.log(err));


        console.log("Sign Up User endpoint hit");
        const result = await model.signUpStudent(name, email, hashedPass);
        console.log(result)

        res.status(result.status).send(result);
        
    },
    signUpTeacher: async (req, res) => {
        const { name, password, email } = req.body;

        const hashedPass = await bcrypt
            .hash(password, salt_rounds)
            .then((res) => res)
            .catch((err) => console.log(err));


        console.log("Sign Up User endpoint hit");
        const result = await model.signUpTeacher(name, email, hashedPass);
        console.log(result)

        res.status(result.status).send(result);
        
    },
};
