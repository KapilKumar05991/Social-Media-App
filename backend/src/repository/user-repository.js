import BaseRepository from "./base-repository.js";
import User from '../models/user.js'

class UserRepository extends BaseRepository {
    constructor(){
        super(User)
    }
    async findById(id){
        try {
            const result = await this.model.findById(id) 
            return result
        } catch (error) {
            console.log('error in user repository');
            throw error
        }
    }
}

export default UserRepository