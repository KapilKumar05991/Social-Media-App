import mongoose from "mongoose"
const {Schema} = mongoose

const likeSchema = new Schema ({
    
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        refPath:'docModel'
    },

    docModel:{
        type :String,
        required: true,
        enum : ['Post','Comment']
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Like  = mongoose.model('Like',likeSchema)
export default Like
