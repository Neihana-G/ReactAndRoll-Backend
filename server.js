const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const {getPool} = require('./db/getPool')
const homePageRoute = require('./routes/homePageTest')
const helpRequests = require('./routes/helpRequests')
require('dotenv').config()
const app = express()

port = process.env.PORT || 4000;

//------ MIDDLEWARE ------//
app.use(express.json())
// app.use(cors);

//---- DB CONNECTION ----//
const pool = getPool()


//------ ROUTES ------//
app.get('/', (req, res) => {
    res.send('Testing')
})
// app.use(homePageRoute)  //Example route to ensure working - can delete later
app.use(helpRequests) 

app.listen(port, () => {
    console.log(`Server live at http://localhost:${port}`)
})


