import React from 'react'
import styled from 'styled-components'
import Post from './Post'

const Posts = () => {
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
`;
