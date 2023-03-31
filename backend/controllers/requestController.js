const asyncHandler = require("express-async-handler")
const Request = require("../models/requestModel")

// @desc Get Requests
// @route GET /api/requests
// @access Private

const getRequests = asyncHandler(async (req, res) => {
    //check necessary validations and pre computings
    const requests = await Request.find({userId: req.user._id})
    res.status(200).json(requests)
})

// @desc Set Goal
// @route POST /api/requests
// @access Private

const setRequest = asyncHandler(async (req, res) => {
    const reqData = req.body;
    if (!req.body) {
        res.status(400)
        //using express error handler
        throw new Error("Please add a text field")
    }
    //check necessary validations
    reqData["userId"]=req.user._id;
    const request = await Request.create(reqData);
    
    res.status(200).json({
        Id: request._id,
        UserId: request.userId,
        Description: request.Description,
        Noofparticipants: request.NoOfParticipants,
        Slot: request.PreferredSlot,
        Status: request.Status,
    })
})

// @desc Update Requests
// @route PUT /api/requests/:id
// @access Private

const updateRequest = asyncHandler(async (req, res) => {
    const request = await Request.findById(req.params.id)
    
    if (!request) {
        res.status(400)
        throw new Error("Requests not found")
    }
    const updateRequest = await Request.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updateRequest)
})

// @desc Delete Request
// @route DELETE /api/requests/:id
// @access Private

const deleteRequest = asyncHandler(async (req, res) => {
    const request = await Request.findById(req.params.id)
    if (!request) {
        res.status(400)
        throw new Error("Request not found")
    }
    await Request.findByIdAndDelete(req.params.id)
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getRequests,
    setRequest,
    updateRequest,
    deleteRequest,
}