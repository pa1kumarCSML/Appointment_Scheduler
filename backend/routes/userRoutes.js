const express = require('express')
const router = express.Router()
const {
    setUser,
    deleteUser,
} = require('../controllers/userController')

//const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router