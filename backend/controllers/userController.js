const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

// @desc Get User
// @route GET /api/users/me
// @access Private

const getUser = asyncHandler(async (req, res) => {
    //check constraints before accessing
    const user1 = await User.findById(req.user._id)

    res.status(200).json(user1)
})

// @desc Register User
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {

    //check validation before creating new user-->valid details,unique user etc
    const userData = req.body ? req.body : null;
    //res.header("Access-Control-Allow-Origin","*")
    //res.header("Access-Control-Allow-Methods:GET, POST, PATCH , PUT,DELETE")
    if (!userData || (!userData.Name || !userData.Email || !userData.Password)) {
        res.status(400)
        //using express error handler
        throw new Error("Please add required fields")
    }
    if (userData.Role == 1) {
        if (!userData.RollNo) {
            res.status(400)
            throw new Error("Please enter valid RollNo")
        } else {
            userData.RollNo = userData.RollNo.toLowerCase()
            const rollNoExist = await User.findOne({ RollNo: userData.RollNo })
            if (rollNoExist) {
                res.status(400)
                throw new Error(`User already exists with this rollno:${userData.RollNo}`)
            }
        }
    }

    //check if user already exists
    const Email = userData.Email
    const userExists = await User.findOne({ Email })
    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10) //#rounds by default is 10
    const hashedPassword = await bcrypt.hash(userData.Password, salt)

    //Create User
    userData.Password = hashedPassword
    const user = await User.create(userData)

    if (user) {
        res.status(201).json({  //201 is also okay
            Id: user._id,
            message: "User registered successfully."
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
})

// @desc Login
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    const userDetails = req.body
    //Check for User Email
    const Email = userDetails.Email
    const userExists = await User.findOne({ Email })
    if (userExists && (await bcrypt.compare(userDetails.Password, userExists.Password))) {
        res.json({
            Id: userExists._id,
            Name: userExists.Name,
            Status: userExists.Status,
            IsAdmin: userExists.Role === 3,
            Role: userExists.Role,
            token: generateToken(userExists._id)
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid Credentials')
    }
})

//Generate Token : JWT
//Sign in a new token with the id that is passed in with the secret used
const generateToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getUser
}