//Requests
// @route GET/api/requests
// access Private
const asyncHandler = require("express-async-handler")
const Request = require("../models/requestModel")

// @desc Get Requests
// @route GET /api/requests
// @access Private

const getRequests = asyncHandler(async (req, res) => {
    //check necessary validations and pre computings
    const requests = await Request.find()
    res.status(200).json(requests)
})

// @desc Set Goal
// @route POST /api/requests
// @access Private

const setRequest = asyncHandler(async (req, res) => {

    if (!req.body) {
        res.status(400)
        //using express error handler
        throw new Error("Please add a text field")
    }
    //check necessary validations

    const request = await Request.create(req.body)
    res.status(200).json(request)
})

// @desc Update Requests
// @route PUT /api/requests/:id
// @access Private

const updateRequest = asyncHandler(async (req, res) => {
    const request = await Request.findById(req.params.id)
    if (!request) {
        res.status(400)
        throw new Error("Goal not found")
    }
    const updateRequest = await Goal.findByIdAndUpdate(req.params.id, req.body, {
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
        throw new Error("Goal not found")
    }
    await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getRequests,
    setRequest,
    updateRequest,
    deleteRequest,
}