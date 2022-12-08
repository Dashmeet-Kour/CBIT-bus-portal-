const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },

    rollno :
    {
    type : Number,
    required:true
    },

    busno : {
        type : Number,
        required : true
    },
    
    paymentstatus : {
        type : String,
        required : true
    },

    year: {
        type : Number,
        required : true
    }

})

const User = mongoose.model('USER', userSchema);
module.exports = User;