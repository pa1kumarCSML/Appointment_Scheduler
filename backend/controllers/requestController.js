const asyncHandler = require("express-async-handler")
const Appointments = require("../models/appointmentModel")
const Users = require("../models/userModel")

// @desc Get Requests
// @route GET /api/requests
// @access Private

const getRequests = asyncHandler(async (req, res) => {
    if (req && req.user && req.user.Role !== 3) {
        res.status(400)
        throw new Error("UnAuthorized User")
    }

    Users.find({ Role: 4 }, (err, users) => {
        if (err) {
            throw new Error(err)
        } else {
            const userIds = users.map(user => user._id);
            Appointments.find({ userId: { $in: userIds } }, (err, requests) => {
                if (err) {
                    res.status(200).json([])
                } else {
                    res.status(200).json(requests)
                }
            });
        }
    });
})


// @desc Update Requests
// @route PUT /api/requests/:id
// @access Private

const updateRequest = asyncHandler(async (req, res) => {
    if (req && req.user && req.user.Role !== 3) {
        res.status(400)
        throw new Error("UnAuthorized User")
    }
    const request = await Appointments.findById(req.params.id)

    if (!request) {
        res.status(400)
        throw new Error("Requests not found")
    }
    const updateRequest = await Appointments.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updateRequest)
})

// @desc Delete Request
// @route DELETE /api/requests/:id
// @access Private

const deleteRequest = asyncHandler(async (req, res) => {
    if (req && req.user && req.user.Role !== 3) {
        res.status(400)
        throw new Error("UnAuthorized User")
    }
    const request = await Appointments.findById(req.params.id)
    if (!request) {
        res.status(400)
        throw new Error("Request not found")
    }
    await Request.findByIdAndDelete(req.params.id)
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getRequests,
    updateRequest,
    deleteRequest,
}