const mongoose = require("mongoose")

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true
    },
    busno:{
        type:String,
        required : true
    },
    
    paymentstatus:{
        type:String,
        required : true
    },

    year:{
        type:String,
        required : true
    }
})

const User = mongoose.model("User",userSchema)
module.exports = User