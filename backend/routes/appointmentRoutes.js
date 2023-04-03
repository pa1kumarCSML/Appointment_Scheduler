const express = require('express')
const router = express.Router()

//Importing Controller methods

const {
    getAppointments,
    setAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointmentsForDate,
} = require('../controllers/appointmentController')

const { protect } = require('../middleware/authMiddleware')



router.route('/').get(protect, getAppointments).post(protect, setAppointment)
router.route('/:date').get(protect, getAppointmentsForDate)
router.route('/:id').delete(protect, deleteAppointment).put(protect, updateAppointment)

module.exports = router