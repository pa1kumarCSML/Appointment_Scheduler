const moment = require('moment');
const asyncHandler = require("express-async-handler")
const Appointment = require("../models/appointmentModel")

// @desc Get Requests
// @route GET /api/requests
// @access Private

const getAppointments = asyncHandler(async (req, res) => {
    //check necessary validations and pre computings based on date
    const appointments = await Appointment.find({ userId: req.user._id })
    res.status(200).json(appointments)
})

// @desc Set Goal
// @route POST /api/requests
// @access Private

const setAppointment = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        //using express error handler
        throw new Error("Please provide valid details")
    }
    const current = new Date()
    const reqDate = new Date(req.body.DateTime)
    if (reqDate < current) {
        res.status(400)
        throw new Error("please update DateTime")
    }

    if (await checkValidSlotOrNot(req.body.DateTime, req.body.Duration)) {
        res.status(400)
        throw new Error("Slot is full in the requested time")
    }
    const appDate = moment(req.body.DateTime, 'YYYY-MM-DD HH:mm');
    const appDetails = req.body;
    //check necessary validations
    appDetails["userId"] = req.user._id;
    if (req.user.Role === 4) {
        appDetails["Status"] = 2
    }
    const appointment = await Appointment.create(appDetails);

    if (appointment) {
        res.status(200).json({
            Id: appointment._id,
            UserId: appointment.userId,
            Description: appointment.Description,
            Noofparticipants: appointment.NoOfParticipants,
            Duration: appointment.Duration,
            DateTime: appointment.DateTime,
            EndTime: appDate.add(appointment.Duration, 'minutes').format('YYYY-MM-DD HH:mm'),
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

    const current = new Date()
    const reqDate = new Date(req.body.DateTime)
    if (reqDate < current) {
        res.status(400)
        throw new Error("please update DateTime")
    }


    if (req && req.user && req.user.Role != 4) {
        req.body.Status = 1
    }
    if (await checkValidSlotOrNot(req.body.DateTime, req.body.Duration, req.params.id)) {
        res.status(400)
        throw new Error("Slot is full in the requested time")
    }
    const updateAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, {
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
    await Appointment.findByIdAndDelete(req.params.id)
    res.status(200).json({ id: req.params.id })
})

const getAppointmentsForDate = asyncHandler(async (req, res) => {
    const regex = new RegExp(`^${req.params.date}`);
    const appointments = await Appointment.find(
        {
            DateTime: regex
        })
    res.status(200).json(appointments)
})

const getAppointment = asyncHandler(async (req, res) => {
    const appointment = await Appointment.findById(req.params.id)
    if (!appointment) {
        res.status(400)
        throw new Error("Appointment not found")
    }
    res.status(200).json({
        Description: appointment.Description,
        Duration: appointment.Duration,
        NoOfParticipants: appointment.NoOfParticipants,
        DateTime: appointment.DateTime,
        userId: appointment.userId,
        Status: 2
    })
})

const checkValidSlotOrNot = asyncHandler(async (datetime, duration, id = null) => {
    date = datetime.split("T")[0]
    const regex = new RegExp(`^${date}`);
    const appointments = await Appointment.find(
        {
            DateTime: regex
        })//all the appointments in that date
    //now check for time overlapping
    const appDate = moment(datetime, 'YYYY-MM-DD HH:mm')
    const endTime2 = appDate.add(duration, 'minutes').format('YYYY-MM-DD HH:mm')
    const s2 = new Date(datetime)
    const e2 = new Date(endTime2)
    slotoverlap = false
    if (appointments.length) {
        appointments.forEach(appointment => {
            if (!id || id != appointment._id) {
                start1 = moment(appointment.DateTime, 'YYYY-MM-DD HH:mm')
                let endTime1 = start1.add(appointment.Duration, 'minutes').format('YYYY-MM-DD HH:mm')
                s1 = new Date(appointment.DateTime)
                e1 = new Date(endTime1)
                if ((s2 <= s1 && e2 >= s1 && e2 <= e1) || (s2 <= e1 && e1 >= s2 && e1 <= e2) ||
                    (s2 >= s1 && e2 <= e1) || (s1 >= s2 && e1 <= e2)) {
                    slotoverlap = true
                    return
                }
            }
        })
    }
    return slotoverlap;
})

module.exports = {
    getAppointments,
    setAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointmentsForDate,
    getAppointment,

}