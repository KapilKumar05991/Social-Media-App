import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        maxLength: [50, "Name cannot be more than 50 characters"],
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ""
    },

}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (err) {
        return next(err);
    }
})

// Add method to compare password
userSchema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};


const User = mongoose.model('User', userSchema);
export default User