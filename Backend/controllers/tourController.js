const Tour = require('../models/Tour')

const createTour=async(req,res)=>{
    const newTour=new Tour(req.body)
    try{
        const savedTour= await newTour.save()
        res.status(200).json({success:true,msg:"Successfully Created",data:savedTour})
    }
    catch(err){
        console.log(err)
        res.status(500).json({success:false,msg:"Failed To create,Try Again!",})   
    }
}

module.exports=createTour;