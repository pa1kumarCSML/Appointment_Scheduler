const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'Please add your Name'],
    },
    Email: {
        type: String,
        unique: true,
        required: [true, 'Please add your Email'],
    },
    Password: {
        type: String,
        length: 8,
        required: [true, 'Please enter password'],
    },
    RollNo: {
        type: String,
        default: null
    },
    Role: {
        type: Number, //1:Students, 2: Faculty, 3: Director, 4:Others
    },
    Status: {
        type: Number, //1-active,0-inactive
        default: 1
    },
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema)