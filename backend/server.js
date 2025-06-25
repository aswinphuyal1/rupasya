//npm i cors dotenv express jsonwebtoken mongoose multer nodemon razorpay stripe validator cloudinary bcrypt

import express from 'express'
import cors from 'cors'
import 'dotenv/config'

//app config
 const app= express()
 const port =process.env.PORT ||4000

 //