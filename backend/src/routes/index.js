import express from 'express'
import authRouter from './v1/auth-route.js'
import postRouter from './v1/post-route.js'

const Router = express.Router()

Router.use('/user',authRouter)
Router.use('/post',postRouter)

export default Router