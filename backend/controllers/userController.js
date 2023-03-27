//CREATE User
// @route POST/api/users
// access Private
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

// @desc Get Goals
// @route GET /api/goals
// @access Private

const getUser = asyncHandler(async (req, res) => {
    //check constrains before accessing

    const user = await User.find(req.params.Email)

    //check password validations

    res.status(200).json(user)
})

// @desc Set Goal
// @route POST /api/user
// @access Private

const setUser = asyncHandler(async (req, res) => {
    if (!req.body) {
        //res.status(400).json({ message: "Please add a text field" })
        res.status(400)
        //using express error handler
        throw new Error("Please add required fields")
    }

    //check validation before creating new user-->valid details,unique user etc

    const user = await User.create(
        req.body
    )
    res.status(200).json(user)
})


module.exports = {
    setUser,
    getUser
}