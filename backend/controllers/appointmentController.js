//Requests
// @route GET/api/appointments
// access Private
const asyncHandler = require("express-async-handler")
const Appointment = require("../models/appointmentModel")

// @desc Get Requests
// @route GET /api/requests
// @access Private

const getAppointments = asyncHandler(async (req, res) => {
    //check necessary validations and pre computings based on date
    const appointments = await Appointment.find()
    res.status(200).json(appointments)
})

// @desc Set Goal
// @route POST /api/requests
// @access Private

const setAppointment = asyncHandler(async (req, res) => {
    const appDetails = req.body;
    console.log(appDetails);
    
    if (!req.body) {
        res.status(400)
        //using express error handler
        throw new Error("Please provide valid details")
    }
    //check necessary validations

    const appointment = await Appointment.create(appDetails);
    console.log(appointment);
    if(appointment){
        res.status(200).json({
            Id: appointment._id,
            //UserId: appointment.userId,
            DateTime: appointment.DateTime,
            EndTime: new Date(appointment.DateTime.getTime() + (appointment.Duration*60*1000)),
            Status: appointment.Status,
        })
    }
})

// @desc Update Requests
// @route PUT /api/requests/:id
// @access Private

const updateAppointment = asyncHandler(async (req, res) => {
    const appointment = await Appointment.findById(req.params.id)
    if (!appointment) {
        res.status(400)
        throw new Error("Appointment not found")
    }
    const updateAppointment = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updateAppointment)
})

// @desc Delete Request
// @route DELETE /api/requests/:id
// @access Private

const deleteAppointment = asyncHandler(async (req, res) => {
    const request = await Appointment.findById(req.params.id)
    if (!request) {
        res.status(400)
        throw new Error("Appointment not found")
    }
    await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getAppointments,
    setAppointment,
    updateAppointment,
    deleteAppointment,
}