import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../actions/posts'

const Form = ({ currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        creator: '',
        message: '',
        tags: '',
    })
    const [image, setImage] = useState('')
    const [uploading, setUploading] = useState(false)

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    const dispatch = useDispatch()

    const uploadFileHandler = async(e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await axios.post('/upload', formData, config)

            setImage(data)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    const handleSubmit = (e) =>  {
        e.preventDefault()

        if(currentId) {
            dispatch(updatePost(currentId, postData))
            handleClear()
        } else {
            dispatch(createPost(postData))
            handleClear()
        }
    }

    const handleClear = () => {
        setCurrentId(null)
        setPostData({ creator: '', message: '', tags: '',})
    }
 
    return (
        <FormContainer>
            <FormHeading>{currentId ? 'Editing' : 'Creating'} a Post</FormHeading>
            <PostForm autoComplete='off' noValidate onSubmit={handleSubmit}>
                    <FormWrap>
                        <input 
                            name="creator" 
                            placeholder="Creator" 
                            value={postData.creator} 
                            onChange={(e) => setPostData({ ...postData, creator: e.target.value })}  
                        />
                        <textarea 
                            name="message" 
                            placeholder="Message" 
                            value={postData.message} 
                            onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                        ></textarea>
                        <input 
                            name="tags" 
                            placeholder="Tags (coma separated)" 
                            value={postData.tags} 
                            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                        />
                        <input 
                            type="text" 
                            placeholder="Enter image url" 
                            value={image} 
                            onChange={(e) => setImage(e.target.value)}
                            style={{ marginBottom: '5px'}}
                        />
                        <FileWrap>
                            <FileInput 
                                type='file' 
                                multiple={false}
                                onChange={uploadFileHandler}
                            />
                            {uploading}
                        </FileWrap>
                        <BtnWrap>
                            <BtnClear onClick={handleClear}>Clear</BtnClear>
                            <BtnSubmit type='submit'>Submit</BtnSubmit>
                        </BtnWrap>
                    </FormWrap>
            </PostForm>
        </FormContainer>
    )
}

export default Form

const FormContainer = styled.div`
    background: #f2f2f2;
    border: 2px solid #cccccc;
    margin: 2rem 2rem 2rem 0 ;
    border-radius: 4px;
    color: #274882;
    max-height: 540px;
    /* position: -webkit-sticky;
    position: sticky; */
    top: 112px;

    @media screen and (max-width: 1170px) {
        margin-right: 0;
        margin-left: 1rem;
    } 

    @media screen and (max-width: 880px) {
        width: 90%;
        margin-left: 0;
        margin-right: 0;
    } 

    @media screen and (max-width: 420px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    } 
`;

const FormHeading = styled.h2`
    text-align: center;
    margin: 1.1rem 0 1.1rem 0;
`;

const PostForm = styled.form`
    min-width: 380px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 420px) {
        width: 90%;
        min-width: 0;
    } 
`;

const FormWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input,
    textarea {
        padding: 8px 12px;
        border-radius: 6px;
        outline: none;
        width: 280px;
        color: #274882;
        margin-bottom: 1.2rem;
        border: 1.5px solid #d6d6d6;
        font-family: inherit;
    }

    input:focus,
    textarea:focus {
        border: 1.5px solid #274882;
    }

    input:last-child {
        border: none;
    }

    textarea {
        resize: none;
        height: 100px;
        font-size: .9rem;
    }

    @media screen and (max-width: 420px) {
        input,
        textarea {
            width: 90%;
        }
    } 
`;

const FileWrap = styled.div`
    border: none;
`;

const FileInput = styled.input`
    border: none;
    margin-bottom: 0;
`;

const BtnWrap = styled.div`
    display: flex;
`;

const BtnSubmit = styled.button`
    background: #3764af;
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 1.2rem;

    &:hover {
        opacity: 0.8;
    }
`;

const BtnClear = styled.button`
    background: #ec1e84;
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
    margin-right: 1rem;

    &:hover {
        opacity: 0.8;
    }
`;

