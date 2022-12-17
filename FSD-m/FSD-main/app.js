const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require("cors")
const mongoose = require ('mongoose');
const bodyparser = require('body-parser')
// const { ConnectionPoolMonitoringEvent } = require('mongodb');

dotenv.config({path:'./config.env'})

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({ limit: "500kb", extended: true }));
app.use(cors())  
app.use('/api/auth', require('./router/auth'))


// const middleware = (req, res, next) => {
//     console.log("hello middleware");
//     next();
// }

var monourl = 'mongodb+srv://dashmeet_kour_30:Waheguruji*1@cluster0.occ7tp6.mongodb.net/test';
mongoose.connect(monourl,{useUnifiedTopology:true, useNewUrlParser:true})
var connection = mongoose.connection

connection.on('error',() => {
    console.log('Mongodb connection failed')
})
connection.on('connected',() =>{
    console.log('Mongodb connection sucessfull')
})



/*
const DB = 'mongodb+srv://dashmeet_kour_30:Waheguruji*1@cluster0.occ7tp6.mongodb.net/fsdCbitBusPortal?retryWrites=true&w=majority';
mongoose.connect(DB,{
    ueNewUrlParser:true,
    useCreateIndex : true,
    useUnifiedTopology : true,
    useFindAndModify:false
}).then(() =>{
    console.log('connection sucessful');
}).catch((err) => console.log('no connecton'));
*/

app.listen(5000, () =>{
    console.log('server is running at port no 5000');
})

