const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    Name: {
        type: String,
        required: [true,'Please add your Name'],
    },
    Email: {
        type: String,
        unique: true,
        required: [true,'Please add your Email'],
    },
    Password: {
        type: String,
        length: 8,
        required: [true,'Please enter password'],
    },
    RollNo: {
        type: String,
        unique: true,
    },
    Role: {
        type: Number,
        enum: [1,2,3,4],
    },
    Status: {
        type: String,
        enum: ['Active','In-Active'],
    },
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('User',userSchema)