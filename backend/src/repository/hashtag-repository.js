import BaseRepository from "./base-repository.js";
import Hashtag from '../models/hashtag.js'

class HashtagRepository extends BaseRepository {
    constructor() {
        super(Hashtag)
    }
}

export default HashtagRepository