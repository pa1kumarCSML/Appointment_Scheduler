const express = require('express')
const router = express.Router()
const {
    setUser
} = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, setUser)

module.exports = router