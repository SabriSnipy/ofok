let mongoose = require('mongoose')
let Schema = mongoose.Schema

// Create User Notification Schema
const VOLUNTEERSCHEMA = new Schema({
   
    firstName:
        {
            type: String,
            required: true
        },
    lastName:
        {
            type: String,
            required: true
        },
    phoneNumber:
        {
            type: String,
            required: true
        },
    email:
        {
            type: String,
            required: true,
        },
    subject:{
            type: String,
            required: true,
    },
    address:
        {
            type: String,
            required: true
        },
    country:
        {
            type: String,
            required: true
        },
    city:
        {
            type: String,
            required: true
        },
    message:
        {
            type: String,
            required: true
        }

   

  },{ timestamps: true});


// Create a model
const VOLUNTEER = mongoose.model('volunteers', VOLUNTEERSCHEMA)

// Export the model
module.exports = VOLUNTEER
