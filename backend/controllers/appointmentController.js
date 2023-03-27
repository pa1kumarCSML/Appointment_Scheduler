//GET Appointments
// @route GET/api/appointment
// access Private
const getAppointments = (req,res) => {
    res.status(200).json({ message: 'Get Appointments' })
}

//CREATE Appointment
// @route POST/api/appointment
// access Private
const setAppointment = (req,res) => {
    res.status(200).json({ message: 'Created Appointment' })
}

//UPDATE Appointment
// @route PUT/api/appointment/:id
// access Private
const updateAppointment = (req,res) => {
    res.status(200).json({ message: `Updated Appointment ${req.params.id}` })
}

//DELETE Appointment
// @route DELETE/api/appointment/:id
// access Private
const deleteAppointment = (req,res) => {
    res.status(200).json({ message: `Deleted Appointment ${req.params.id}` })
}

module.exports = {
    getAppointments,
    setAppointment,
    updateAppointment,
    deleteAppointment,
}