const mongoose = require('mongoose')

const requestSchema = mongoose.Schema({
    Description: {
        type: String,
        required: [true,'Please mention the details of the meeting'],
    },
    Urgency: {
        type: String,
        enum: [U1,U2,U3,U4],
    },
    PreferredSlot: {
        type: String,
        required: [true,'Please mention the preferred slots'],
    },
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('Request',requestSchema)