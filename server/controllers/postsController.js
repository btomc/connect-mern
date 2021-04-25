import express from 'express'
import PostMessage from '../models/postModel.js'


const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// export const getPost = async (req, res) => {}

const createPost = async (req, res) => {
    // const post = req.body
    const { message, image, creator, tags } = req.body

    const newPostMessage = new PostMessage({ message, image, creator, tags})

    try {
        await newPostMessage.save()

        res.status(201).json(newPostMessage)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export { getPosts, createPost}