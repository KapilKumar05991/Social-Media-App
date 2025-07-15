import mongoose from "mongoose"
const {Schema} = mongoose

const commentSchema = new Schema ({
    text: {
        type:String,
        required:true,
        trim: true
    },
    docModel:{
        type :String,
        required: true,
        enum : ['Post','Comment']
    },

    parent: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'docModel'
    },
    
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Like'
    }],
    comments: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
})

const Comment  = mongoose.model('Comment',commentSchema)
export default Comment
