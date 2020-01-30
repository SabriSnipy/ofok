let mongoose = require('mongoose')
let Schema = mongoose.Schema

// Create User Notification Schema
const CONTACTUSSCHEMA = new Schema({
   
    name:
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
    message:
        {
            type: String,
            required: true
        }

   

  },{ timestamps: true});


// Create a model
const CONTACTUS = mongoose.model('contact-us', CONTACTUSSCHEMA)

// Export the model
module.exports = CONTACTUS
