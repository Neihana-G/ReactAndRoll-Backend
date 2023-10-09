const express = require('express')
const homeTestController = require('../controllers/homeTest')
const router = express();

router.get('/', homeTestController.homePage)

module.exports = router;




