const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema({
    Date: {
        type: Date,
        required: [true, 'Please mention the date to book'],
    },
    Time: {
        type: Date,
        required: [true, 'Please mention the time to book'],
    },
    Name: {
        type: String,
        required: [true, 'Please add your Name'],
    },
    Email: {
        type: String,
        unique: true,
        required: [true, 'Please add your Email'],
    },
    RollNo: {
        type: String,
        unique: true,
    },
    Role: {
        type: Number,
        enum: [1, 2, 3, 4],
    },
    Status: {
        type: String,
        //enum: ['Aproved', 'pending'],
    },
},
    {
        timestamps: true,
    },
)

module.exports = mongoose.model('Appointment', appointmentSchema)