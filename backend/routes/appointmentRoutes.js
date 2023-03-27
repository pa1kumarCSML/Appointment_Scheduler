const express = require('express')
const router = express.Router()
const {
    getAppointments,
    setAppointment,
    updateAppointment,
    deleteAppointment,
} = require('../controllers/appointmentController')

//const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getAppointments).post(setAppointment)
router.route('/:id').delete(deleteAppointment).put(updateAppointment)

module.exports = router