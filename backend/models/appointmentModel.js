const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema({
    Date: {
        type: Date,
        required: [true,'Please mention the date to book'],
    },
    Time: {
        type: Date,
        required: [true,'Please mention the time to book'],
    },
},
{
    timestamps: true,
},
)

module.exports = mongoose.model('Appointment',appointmentSchema)