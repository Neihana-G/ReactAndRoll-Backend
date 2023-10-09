const mysql = require('mysql2')
require('dotenv').config()

module.exports = {
    getPool: () => {
        return mysql.createPool({

            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_DATABASE,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
              
        })
    }
}