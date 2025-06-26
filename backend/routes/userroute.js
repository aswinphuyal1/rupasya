import express from 'express'
import { loginuser,registeruser,adminlogin } from '../controllers/uercontoller.js'
const userrouter =express.Router();

userrouter.post('/register', registeruser)
userrouter.post('/login', loginuser);
userrouter.post('/admin', adminlogin);

export default userrouter;

