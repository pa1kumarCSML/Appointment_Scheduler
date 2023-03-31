const express = require('express')
const router = express.Router()
const {
    registerUser,
    getUser,
    loginUser,
} = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')

//const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me',protect, getUser) //authorizing it with a token

module.exports = router