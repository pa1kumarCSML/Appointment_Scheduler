const express = require('express')
const router = express.Router()
const {
    setUser
} = require('../controllers/userController')

//const { protect } = require('../middleware/authMiddleware')

router.route('/').post(setUser)

module.exports = router