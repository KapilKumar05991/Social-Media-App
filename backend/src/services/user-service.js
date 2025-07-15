import { UserRepository }  from '../repository/index.js'
 
class UserService {
    constructor(){
        this.repository = new UserRepository()
    }

    async signup(data){
        try {
            const res = await this.repository.create(data)
            return res
        } catch (error) {
            console.log('error in signup')
            throw error
        }
    }
    async getById(id){
        try {
            const res = await this.repository.findById(id)
            return res
        } catch (error) {
            console.log('error in user-service');
            throw error
        }
    }
    async getUser(data){
        try {
            const res = await this.repository.read(data)
            return res
        } catch (error) {
            console.log('error in user-service');
            throw error
        }
    }
}

export default UserService