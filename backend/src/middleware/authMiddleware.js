import passport from "passport"

const authMiddleware = async (req,res,next) => {
    if(passport.authenticate('jwt', { session: false })){
        next()
    }else{
        return res.status(403).json({
            success:false,
            data:'',
            msg:'Unauthorized access',
            error:''
        })
    }
}

export default authMiddleware