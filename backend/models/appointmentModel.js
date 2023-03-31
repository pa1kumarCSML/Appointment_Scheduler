const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema({
    // userId: {
    //     type: String,
    //     default:'6426a9fd4580cd2250540e67',
    // },
    DateTime: {
        type: Date, //store as yyyy-mm-dd
        required: [true, 'Please mention the date to book'],
    },
    Duration: {
        type: Number, //maintain as minutes
        required: true,
    },
    Status: {
        type: Number, //Approved:2, Pending: 1, Declined: 3
        default: 1,
    },
},
    {
        timestamps: true,
    },
)

module.exports = mongoose.model('Appointment', appointmentSchema)