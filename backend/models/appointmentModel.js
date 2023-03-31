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
        type: Date, //store as yyyy-mm-dd
        required: [true, 'Please mention the date to book'],
    },
    Duration: {
        type: Number, //maintain as minutes
        required: true,
    },
    NoOfParticipants: {
        type: Number,
        default: 1,
    },
},
    {
        timestamps: true,
    },
)

module.exports = mongoose.model('Appointment', appointmentSchema)