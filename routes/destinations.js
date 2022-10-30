const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const destinationsController = require('../controllers/destinations')


router.get('/', ensureAuth, destinationsController.getDestinations)

module.exports = router 