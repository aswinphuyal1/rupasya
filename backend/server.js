//npm i cors dotenv express jsonwebtoken mongoose multer nodemon razorpay stripe validator cloudinary bcrypt

import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectdb from './config/mongodb.js'
import connectcloudinary from './config/cloudinary.js'
import userrouter from './routes/userroute.js'

//app config
 const app= express()
 const port =process.env.PORT ||4000

 connectdb();
 connectcloudinary();

 //middlewares
 app.use(express.json())
 app.use(cors())

 //api endpoints
app.use('/api/user',userrouter)

 app.get('/',(req,res)=>
{
    res.send("Api working")
})

app.listen(port,()=>console.log('serve started on port :',port))