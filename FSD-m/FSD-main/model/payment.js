const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema({
    rollno:{
        type:String,
        required:true
    },
    cardno:{
        type:String,
        required : true
    },
    expiry:{
        type:String,
        required : true
    },
    cvv:{
        type:String,
        required : true
    }
})

module.exports  = mongoose.model("Payment",paymentSchema)