const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const homeController = require('../controllers/home')


router.get('/', ensureAuth, homeController.getHome)

module.exports = router 