const mongoose = require('mongoose')

/*
To be hooked up with Backend Authentication
ATTRIBUTES WILL BE MODIFIED LATER DOWN THE LINE
 */
const organizerSchema = new mongoose.Schema({
    aboutTheOrganizer:{
        type:String,
        required:True
    },
    actions:{
        type:Array,
        required:True
    },
    date: {
        type: Date,
        default: Date.now
    },
    description:{
        type:String,
        required:true,
        min:4
    },
    email:{
        type: String,
        required: true,
        max: 40,
        min: 5
    },
    externalLinks:{
        type:Array,
        required:true
    },
    name:{
        type:String,
        required:true,
        min:4
    }
    password: {
        type:String,
        required:true,
        max: 40,
        min: 6
    },
    tags:{            //are event tags, see mgmt 115 slide 4
        type:Array,
        required:true,
    }
});

module.exports = mongoose.model('organizer',organizerSchema)