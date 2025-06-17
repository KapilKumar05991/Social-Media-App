class BaseRepository {
    constructor(model){
        this.model = model
    }

    async create(data){
        try {
            const result = await this.model.create(data)
            return result
        } catch (error) {
            console.log('error in base repository')
            throw error
        }
    }
    async read(data) {
        try {
            const result = await this.model.findOne(data)
            return result
        } catch (error) {
            console.log('error in base repository')
            throw error
        }
    }

    async update(id,data) {
        try {
            const result = await this.model.findByIdAndUpdate(id,data)
            return result
        } catch (error) {
            console.log('error in base repository')
            throw error
        }
    }

    async delete(id){
        try {
            const result = await this.model.findByIdAndDelete(data)
            return result
        } catch (error) {
            console.log('error in base repository')
            throw error
        }
    }

}

export default BaseRepository