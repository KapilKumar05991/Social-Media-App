import User from "../models/user.js"
import UserService from "../services/user-service.js"
import jwt from 'jsonwebtoken'

const userService = new UserService()

const signup = async (req, res) => {
    try {
        const { username, password, email } = req.body
        const imageUrl = req.file.path
        const existUser = await userService.getUser({
            $or: [
                { username: username },
                { email: email }
            ]
        })

        if (existUser) {
            return res.status(400).json({
                success: false,
                data: existUser,
                msg: 'User already exists',
                error: ''
            })
        }

        const newUser = await userService.signup({ username, password, email, imageUrl })
        return res.status(200).json({
            success: true,
            data: newUser,
            msg: 'user created succesfully',
            error: ''
        })
    } catch (error) {
        return res.status(403).json({
            success: false,
            data: null,
            msg: 'user creation failed',
            error: error
        })
    }
}

const login = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const user = await userService.getUser({
            $or: [
                { username: username },
                { email: email }
            ]
        })

        if (!user) return res.status(403).json({
            success: false,
            data: null,
            msg: 'user not found',
            error: ''
        })

        const isMatch = await user.comparePassword(password) 

        if(!isMatch) return res.status(400).json({
            success : false ,
            data:null,
            msg : "Incorrect Password",
            error:''
        });

        const payload = {id : user.id , username : user.username }
        const token = jwt.sign(payload , process.env.SECRET_KEY ,{expiresIn : '1h'});

        return res.status(200).json({
            success : true ,
            data:{token},
            msg : "Login Successfully",
            error:''
        });
        

    } catch (error) {
        return res.status(403).json({
            success: false,
            data: null,
            msg: 'user login failed',
            error: error
        })
    }
}

export default {
    signup,
    login
}