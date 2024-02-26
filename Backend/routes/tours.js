const express= require('express');
const createTour = require('../controllers/tourController')
const router= express.Router();


router.post('/tours',createTour) //create new tour

module.exports=router; 