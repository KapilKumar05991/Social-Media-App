import mongoose from "mongoose"
import 'dotenv/config'

const URL = process.env.MONGODB_URL
const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Mongodb Connected")
    } catch (error) {
        console.log("Mongodb Connection Failed")
        throw error
    }
}
export default connectDB;
