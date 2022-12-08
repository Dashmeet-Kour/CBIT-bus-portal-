const express = require('express');
const { model } = require('mongoose');
const router = express.Router();


router.get('/',(req,res) =>{
    res.send('Hello world from server1 router.js');
})

model.exports = router;
