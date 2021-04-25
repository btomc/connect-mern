import mongoose from 'mongoose'

const postSchema = mongoose.Schema(
    {
        message: String,
        creator: String,
        tags: [String],
        image: String,
        likeCount: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
)

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage
