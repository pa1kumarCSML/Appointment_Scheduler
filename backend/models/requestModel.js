const mongoose = require('mongoose')

const requestSchema = mongoose.Schema({
    userId: {
        type: String,
     },
    Description: {
        type: String,
        required: [true, 'Please mention the details of the meeting'],
    },
    PreferredSlot: {
        type: Date,
        required: [true, 'Please mention the preferred slots'],
    },
    Duration: {
        type: Number,
    },
    NoOfParticipants: {
        type: Number,
    },
    Status: {
        type: Number, //Approved:2, Pending: 1, Declined: 3
        default: 1,
    },
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Request', requestSchema)