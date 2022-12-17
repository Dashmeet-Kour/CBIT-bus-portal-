const catchAsyncerror = require("../errorhandler/catchAsyncerror")
const User  = require("../model/user")
const Contact = require("../model/contact")
const Feedback = require("../model/feedback")
const Payment = require("../model/payment")
const { response } = require("express")


exports.register = catchAsyncerror(
    async(req, res, next)=>{
        console.log(req.body)
        const {username,rollno,busno,paymentstatus,year} = req.body;
try {
    User.findOne({rollno},(err,user)=>{
        if(user){
           return res.status(500).json("user already registered please login")
        }
    else{
            const user= User.create({
        username:username,
        rollno:rollno,
        busno:busno,
        paymentstatus:paymentstatus,
        year:year
            })
            return res.status(200).json(user)
        }
    })
} catch (error) {
 console.log(error)   
}
    }
)

exports.login = catchAsyncerror(
    async(req,res,next)=>{
        const {username,password}  = req.body
        try {
            if (!username || !password) {
                return res.status(400).json("please fill all input ");
              }

            const result = await User.findOne({
                username:username,
                rollno:password,
});
        
            if (result) {
                console.log(result)
             return res.status(200).json(result)
            } else {
              return res.status(500).json("Invalid credentials user not found");
            }
          } catch (error) {
            res.status(500).json(error);
          }
    }
)

exports.contactinfo = catchAsyncerror(
    async(req,res,next)=>{
        const {name,email,phoneno,message} = req.body
        try{
            const data = Contact.create({
                name,email,phoneno,message
            })
            return res.status(201).json("data successfully submmited")
        }catch(error){
            return res.status(500).json("there is a error while submitting data")
        }
    }
)

exports.feedback =catchAsyncerror(
    async(req,res,next)=>{
        const {rollno,feedback} = req.body
        try{
            if(!rollno||!feedback){
                return res.status(500).json("Please Fill All The Inputs")
            }else{
Feedback.create({
    rollno,feedback
})
return res.status(200).json("Feedback Submitted Successfully")
            }
        }catch(error){
            return res.status(500).json("error while submmiting your feedback ")
        }
    }
)

exports.payment = catchAsyncerror(
    async(req,res,next)=>{
        const {rollno,cardno,expiry,cvv} = req.body
     
        try {
            const user = await User.findOne({rollno:rollno})
            if(user){
                const payment = await Payment.create({
                    rollno,
                    cardno,
                    expiry,
                    cvv
                })
       await User.findByIdAndUpdate(user._id,{
            paymentstatus:true
        })
        return res.status(201).json("Payment Successfull")
            }else{
                return res.status(500).json("Roll No Not Found")
            }
            
        } catch (error) {
            return res.status(500).json(error)
        }
    }
)