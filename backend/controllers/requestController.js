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
    // //check necessary validations and pre computings
    // const users = await Users.find({ Role: 4 })
    // const requests = await Appointments.
    //     res.status(200).json(requests)

    Users.find({ Role: 4 }, (err, users) => {
        if (err) {
            console.error(err);
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

// @desc Set Goal
// @route POST /api/requests
// @access Private

// const setRequest = asyncHandler(async (req, res) => {
//     const reqData = req.body;
//     if (!req.body) {
//         res.status(400)
//         //using express error handler
//         throw new Error("Please add a text field")
//     }
//     //check necessary validations
//     reqData["userId"] = req.user._id;
//     const request = await Request.create(reqData);

//     res.status(200).json({
//         Id: request._id,
//         UserId: request.userId,
//         Description: request.Description,
//         Noofparticipants: request.NoOfParticipants,
//         Slot: request.PreferredSlot,
//         Status: request.Status,
//     })
// })

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