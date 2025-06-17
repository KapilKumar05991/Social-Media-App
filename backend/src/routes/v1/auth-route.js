import express from 'express'
import authMiddleware from '../../middleware/authMiddleware.js'
const authRouter = express.Router()


import authController from '../../controllers/auth-controller.js'

authRouter.post('/signup',authController.signup)
authRouter.post('/login',authController.login)
authRouter.get('/profile',authMiddleware,(req,res)=>{
    return res.json({
        msg: 'Welcome to Social app'
    })
})

export default authRouter