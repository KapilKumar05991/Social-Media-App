import BaseRepository from "./base-repository.js";
import Like from "../models/like.js";

class LikeRepository extends BaseRepository{
    constructor (){
        super(Like)
    }
}

export default LikeRepository