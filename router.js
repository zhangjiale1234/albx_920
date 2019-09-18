const express = require('express');
const router = express.Router()
const controller  =require('./controller/pageController.js');

router.get('/',(req,res)=>{
    controller.getIndexPage(req,res)
})

module.exports = router 