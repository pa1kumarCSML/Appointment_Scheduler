const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema({
    userId: {
        type: String,
    },
    Description: {
        type: String,
        required: [true, 'Please mention the details of the meeting'],
    },
    DateTime: {
        type: String, //store as yyyy-mm-dd
        required: [true, 'Please mention the date and time to book'],
    },
    Duration: {
        type: Number, //maintain as minutes
        required: true,
    },
    NoOfParticipants: {
        type: Number,
        default: 1,
    },
    Status: {
        type: Number,//1-approved,2-pending,3-declined
        default: 1,
    }
},
    {
        timestamps: true,
    },
)

module.exports = mongoose.model('Appointment', appointmentSchema)