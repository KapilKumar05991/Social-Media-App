import { CommentRepository, PostRepository } from '../repository/index.js'

class CommentService {
    constructor(){
        this.commentRepository = new CommentRepository();
        this.postRepository = new PostRepository()
    }

    async createComment(modelType,modelId,text,userId) {
        try {
            let parent = null
            if(modelType == 'Post'){
                parent = await this.postRepository.getPostById(modelId);

            }else if(modelType == 'Comment') {
                parent = await this.commentRepository.getCommentById(modelId);
            }
            const comment = await this.commentRepository.create({
                    user:userId,
                    parent:modelId,
                    docModel:modelType,
                    text,
                    likes:[],
                    comments:[]
            })
            parent.comments.push(comment._id)
            await parent.save();
            return comment

        } catch (error) {
            console.log('error in comment service')
            console.log(error)
            throw error            
        }
    }
}

export default CommentService