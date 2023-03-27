const express = require('express')
const router = express.Router()
const {
    getRequests, setRequest,
    updateRequest, deleteRequest
} = require('../controllers/requestController')

//const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getRequests).post(setRequest)
router.route('/:id').delete(deleteRequest).put(updateRequest)

module.exports = router