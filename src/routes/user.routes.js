// const User = require('../models/user.model')
const express = require('express')
const router = express.Router()


router.get('/',getUserController)

module.exports = router