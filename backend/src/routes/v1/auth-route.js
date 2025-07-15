import express from 'express'
import authMiddleware from '../../middleware/authMiddleware.js'
import authController from '../../controllers/auth-controller.js'
import {profileImageUpload} from '../../config/multer.js'

const authRouter = express.Router()

authRouter.post('/signup',profileImageUpload.single('image'),authController.signup)
authRouter.post('/login',authController.login)
// authRouter.put('/profile/update')
authRouter.get('/profile', authMiddleware, (req, res) => {
  res.json({ msg: 'Welcome!', user: req.user });
});

export default authRouter