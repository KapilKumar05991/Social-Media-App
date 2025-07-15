import { PostRepository } from "../repository/index.js";
import CommentService from "./comment-service.js";
import LikeService from "./like-service.js";

const commentService = new CommentService()
const likeService = new LikeService()

class PostService {
    constructor(){
        this.repository = new PostRepository()
    }

    async getPostById(id){
        try {
            const res = await this.repository.getPostById(id);
            return res
        } catch (error) {
            console.log('error in post-service')
            throw error
        }

    }
    async createPost(data) {
        try {
            const res = await this.repository.create(data)
            return res
        } catch (error) {
            console.log('error in post-service')
            throw error
        }
    }
    async createComment(modelType,modelId,text,userId){
        try {
            const res = await commentService.createComment(modelType,modelId,text,userId);
            return res
        } catch (error) {
            console.log('error in post-service')
            throw error
        }
    }
    async addOrRemoveLike(modelType,modelId,userId){
        try {
            const active = await likeService.addOrRemoveLike(modelType,modelId,userId)
            return active
        } catch (error) {
            console.log('error in post-service')
            throw error
        }
    }
}

export default PostService