import BaseRepository from "./base-repository.js";
import Post from '../models/post.js'

class PostRepository extends BaseRepository {
    constructor(){
        super(Post)
    }
    async getPostById(id){
        try {
            const res = await this.model.findById(id)
            return res
        } catch (error) {
            console.log('error in post repository')
            throw error
        }
    }
}

export default PostRepository