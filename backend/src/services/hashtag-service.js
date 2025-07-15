import { HashtagRepository } from "../repository/index.js";

class HashtagService {
    constructor(){
        this.Repository = new HashtagRepository()
    }

    async createHashtag(tag,posts){
        try {
            const hashtag = await this.Repository.create({tag,posts})
            return hashtag
        } catch (error) {
            console.log('error in hashtag service')
            throw error
        }
    }

    async findHashtag(tag){
        try {
            const hashtag = await this.Repository.read({tag})
            return hashtag
        } catch (error) {
            console.log('error in hashtag service')
            throw error
        }
    }
}

export default HashtagService