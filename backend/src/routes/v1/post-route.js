import express from 'express'
import authMiddleware from '../../middleware/authMiddleware.js'
import postController from '../../controllers/post-controller.js'
import { postImageUpload } from '../../config/multer.js'

const postRouter = express.Router()

postRouter.get('/:id',postController.getPost)
postRouter.post('/create',postImageUpload.array('images',4),authMiddleware,postController.createPost)
postRouter.post('/:id/comment',authMiddleware,postController.createComment)
postRouter.post('/:id/like',authMiddleware,postController.togglePostLike)
postRouter.post('/comment/:id/like',authMiddleware,postController.toggleCommentLike)
postRouter.post('/comment/:id/comment',authMiddleware,postController.nestedComment)
postRouter.get('/all',authMiddleware,postController.getAllPost)

export default postRouter