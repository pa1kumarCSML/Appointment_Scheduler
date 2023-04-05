const express = require('express')
const router = express.Router()
const {
    getRequests,
    updateRequest, deleteRequest
} = require('../controllers/requestController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getRequests)
router.route('/:id').delete(protect, deleteRequest).put(protect, updateRequest)

module.exports = router