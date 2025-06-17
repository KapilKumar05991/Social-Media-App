import express from 'express'
import authRouter from './v1/auth-route.js'

const Router = express.Router()

Router.use('/user',authRouter)

export default Router