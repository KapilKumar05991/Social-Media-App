import passportjwt from 'passport-jwt'
import 'dotenv/config'
import UserService from '../services/user-service.js'
const userService = new UserService()

let JwtStrategy = passportjwt.Strategy
let ExtractJwt = passportjwt.ExtractJwt

let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY,
}

const passport_strategy = (passport) => {

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        try {
            const user = userService.getById(jwt_payload.id)
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        } catch (error) {
            console.log('error in jwt-strategy');
            return done(err, false);
        }
    }));
}

export default passport_strategy