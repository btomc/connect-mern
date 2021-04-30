import express from 'express'
const router = express.Router()
import { getPosts, createPost, updatePost, deletePost } from '../controllers/postsController.js'
import auth from '../middleware/auth.js'


router.get('/', getPosts)
router.post('/', auth, createPost)
router.patch('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost)


export default router
