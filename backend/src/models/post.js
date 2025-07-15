import mongoose from "mongoose"
const { Schema } = mongoose

const postSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String,
        trim: true,
        maxLength: [1000, "Post text cant have more than 1000 character"],
    },
    media: [{
        type: String,
        default:''
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    hashtags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'hashtag'
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Likes'
    }]
}, { timeStamps: true })

const Post = mongoose.model('Post', postSchema);
export default Post;