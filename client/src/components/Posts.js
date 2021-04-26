import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Post from './Post'

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts)

    console.log(posts)

    return (
        <PostsContainer>
            {posts.map((post) => (
                <PostsWrap key={post._id}>
                    <Post post={post} setCurrentId={setCurrentId} />
                </PostsWrap>
            ))}
           {/* <Post />
           <Post />
           <Post /> */}
        </PostsContainer>
    )
}

export default Posts

const PostsContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    &:last-child {
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 880px) {
        align-items: center;
        width: 70%;
    } 

    @media screen and (max-width: 610px) {
        width: 90%;
    } 
`;

const PostsWrap = styled.div`
    height: 100%;
    width: 100%;
    max-width: 650px;
`;
