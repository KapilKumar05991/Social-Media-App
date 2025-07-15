import mongoose, { mongo, Schema } from "mongoose";

const hashtagSchema = new mongoose.Schema({
    tag :{
      type : String,
      unique : true  
    },
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Post'
    }]
})

const Hashtag = mongoose.model('Hashtag',hashtagSchema)

export default Hashtag;