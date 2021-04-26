import express from 'express'
import mongoose from 'mongoose'
import PostMessage from '../models/postModel.js'


const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


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

const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id}, { new: true })

    res.json(updatedPost)
}

export { getPosts, createPost, updatePost}