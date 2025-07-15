import { LikeRepository,PostRepository,CommentRepository } from "../repository/index.js"

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository()
        this.postRepository = new PostRepository()
        this.commentRepository = new CommentRepository();
    }
    async addOrRemoveLike(modelType, modelId, userId) {

        try {
            const likeExist = await this.likeRepository.read({
                parent: modelId,
                user: userId
            })
            let parent = null
            if (likeExist) {
                if (modelType == 'Post') {
                    parent = await this.postRepository.getPostById(modelId);

                } else if (modelType == 'Comment') {
                    parent = await this.commentRepository.getCommentById(modelId);
                }
                parent.likes.pull(likeExist._id)
                await parent.save()
                await likeExist.deleteOne()
                return false
            } else {
                if (modelType == 'Post') {
                    parent = await this.postRepository.getPostById(modelId);

                } else if (modelType == 'Comment') {
                    parent = await this.commentRepository.getCommentById(modelId);
                }
                const newLike = await this.likeRepository.create({
                    docModel: modelType,
                    parent: modelId,
                    user: userId
                })
                parent.likes.push(newLike._id)
                await parent.save();
                return true

            }
        } catch (error) {
            console.log('Error in like service')
            throw error
        }
    }
}

export default LikeService