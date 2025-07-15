import PostService from "../services/post-service.js";
import HashtagService from "../services/hashtag-service.js";


const postService = new PostService()
const hashtagService = new HashtagService()

const getPost = async function (req,res) {
    try {
        const post = await postService.getPostById(req.params.id);
        return res.status(200).json({
            success: true,
            data: post,
            msg: 'post found success',
            error: null
        })
    } catch (error) {
        return res.status(403).json({
            success: false,
            data: null,
            msg: 'something went wrong in fetching post!',
            error: error
        })
    }
}

const createPost  = async function (req,res) {
    const { content } = req.body
    try {
        let imageUrls = []
        if(req.files){
             imageUrls = req.files.map(file => file.path);
        }
        let post = await postService.createPost({
            user:req.user._id,
            content,
            hashtags:[],
            media:imageUrls,
            comments: [],
            likes: []
        })
        console.log(typeof content)
        let tags = content.match(/#\w+/g)
        console.log(tags)
        if(tags){
            for(let tag of tags){
                tag = tag.toLowerCase().substring(1)
                let isExist = await hashtagService.findHashtag(tag)
                if(!isExist){
                    const newHashtag = await hashtagService.createHashtag(tag,[post._id])
                    post.hashtags.push(newHashtag._id)
                }else{
                    isExist.posts.push(post._id)
                    post.hashtags.push(isExist._id)
                    await isExist.save()
                }
            }
            await post.save()
        }

        return res.status(200).json({
            success: true,
            data: post,
            msg: 'post created suceessfully',
            error: null
        })
    } catch (error) {
        console.log(error)
        return res.status(403).json({
            success: false,
            data: null,
            msg: 'post creation failed!',
            error: error
        })
    }
}

const createComment = async function (req,res) {
    try {
        const {text} = req.body
        const {id} = req.params
        const comment = await postService.createComment('Post',id,text,req.user._id)
        
        return res.status(200).json({
            success: true,
            data: comment,
            msg: 'comment created successfully!',
            error: null
        })
        
    } catch (error) {
        return res.status(403).json({
            success: false,
            data: null,
            msg: 'comment creation failed!',
            error: error
        })
    }
}

const nestedComment = async function (req,res) {
    try {
        const {text} = req.body
        const {id} = req.params
        const comment = await postService.createComment('Comment',id,text,req.user._id)
        
        return res.status(200).json({
            success: true,
            data: comment,
            msg: 'nested comment created successfully!',
            error: null
        })
    } catch (error) {
        return res.status(403).json({
            success: false,
            data: null,
            msg: 'nested comment creation failed!',
            error: error
        })
    }
}

const togglePostLike = async function (req,res) {
    try {
        const postId = req.params.id
        const likeActive = await  postService.addOrRemoveLike('Post',postId,req.user._id);
        return res.status(200).json({
            success: true,
            data: {likeActive},
            msg: 'Post like toggle successfully!',
            error: null
        })
    } catch (error) {
        return res.status(403).json({
            success: false,
            data: null,
            msg: 'Post like toggle failed!',
            error: error
        })
    }

}
const toggleCommentLike = async function (req,res) {
    try {
        const commentId = req.params.id
        const likeActive = await  postService.addOrRemoveLike('Comment',commentId,req.user._id);
        return res.status(200).json({
            success: true,
            data: {likeActive},
            msg: 'Comment like toggle successfully!',
            error: null
        })
    } catch (error) {
        return res.status(403).json({
            success: false,
            data: null,
            msg: 'Comment like toggle failed!',
            error: error
        })
    }
}
const getAllPost = async function (req,res) {
    
}
export default {
    getPost,
    createPost,
    createComment,
    nestedComment,
    togglePostLike,
    toggleCommentLike,
    getAllPost
}