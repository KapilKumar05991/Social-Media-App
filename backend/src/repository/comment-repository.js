import BaseRepository from './base-repository.js'
import Comment from '../models/comment.js'

class CommentRepository extends BaseRepository {
    constructor(){
        super(Comment)
    }
    async getCommentById(id){
        try {
            const res = await this.model.findById(id)
            return res
        } catch (error) {
            console.log('error in commnet repository')
            throw error            
        }
    }
    
}

export default CommentRepository