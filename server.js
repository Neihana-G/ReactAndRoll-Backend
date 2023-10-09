const express = require('express')
const mysql = require('mysql2')
const {getPool} = require('./db/getPool')
const homePageRoute = require('./routes/homePageTest')
require('dotenv').config()
const app = express()

port = process.env.PORT || 4000;

//---- DB CONNECTION ----//
const pool = getPool()


//------ ROUTES ------//
app.use(homePageRoute)  //Example route to ensure working - can delete later


app.listen(port, () => {
    console.log(`Server live at http://localhost:${port}`)
})


