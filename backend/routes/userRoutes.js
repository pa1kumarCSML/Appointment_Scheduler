const express = require('express')
const router = express.Router()
const {
    setUser,
    getUser
} = require('../controllers/userController')

//const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getUser).post(setUser)

module.exports = router