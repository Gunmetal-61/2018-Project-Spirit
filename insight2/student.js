const mongoose = require('mongoose')

/*
WILL BE Hooked up with Backend Authentication
ATTRIBUTES WILL BE SUBJECT TO CHANGE
*/
const studentSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    email:{
        type: String,
        required: true,
        max: 40,
        min: 5
    },
    name:{
        type:String,
        required:true,
        min:4
    },
    password: {
        type:String,
        required:true,
        max: 40,
        min: 6
    },
    upcomingEvents: {
        type:Array,
        required:true
    }

});

module.exports = mongoose.model('student',studentSchema)