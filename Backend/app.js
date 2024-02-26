const express= require('express');
const cors= require('cors');
const dotenv=require('dotenv');
const mongoose= require('mongoose');
const cookieParser = require('cookie-parser');
const tourRoute= require('./routes/tours')
dotenv.config()
const app= express();

mongoose.set('strictQuery',false)
const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database Connected');
    }
    catch(err){
        console.log(err );
        
         console.log('Database Connection failed');
         
    }
}

app.get('/',(req,res)=>{
    res.send("api is working fine")
})

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(tourRoute)

const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    connect();
    console.log('Backend Connected');
    
})