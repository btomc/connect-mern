import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Post from './Post'

const Posts = () => {
    const posts = useSelector((state) => state.posts)

    console.log(posts)

    return (
        <PostsContainer>
           <Post />
           <Post />
           <Post />
        </PostsContainer>
    )
}

export default Posts

const PostsContainer = styled.div`
    width: 60%;
    height: 100%;

    &:last-child {
        margin-bottom: 2rem;
    }
`;
