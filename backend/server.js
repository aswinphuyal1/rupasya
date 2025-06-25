//npm i cors dotenv express jsonwebtoken mongoose multer nodemon razorpay stripe validator cloudinary bcrypt

import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectdb from './config/mongodb.js'
import connectcloudinary from './config/cloudinary.js'

//app config
 const app= express()
 const port =process.env.PORT ||4000


 //middlewares
 app.use(express.json())
 app.use(cors())
connectdb()
connectcloudinary()
 //api endpoints
 app.get('/',(req,res)=>
{
    res.send("Api working")
})

app.listen(port,()=>console.log('serve started on port :',port))