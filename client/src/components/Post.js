import React from 'react'
import styled from 'styled-components'
// import img1 from '../images/img-2.jpg'
import profile2 from '../images/profile-3.jpg'
import { FiBookmark } from 'react-icons/fi'
import { HiDotsHorizontal } from 'react-icons/hi'
import { AiOutlineLike, AiFillDelete } from 'react-icons/ai'
import { GoCommentDiscussion } from 'react-icons/go'
// import moment from 'moment'
import { useDispatch } from 'react-redux' 
import { deletePost } from '../actions/posts' 

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch()

    return (
        <PostContainer>
            <CreatorContent>
                <Creator>
                    <ProfilePic><ImgProfile src={profile2} alt='man' /></ProfilePic>
                    <CreatorWrap>
                        <CreatorName>{post.creator}</CreatorName>
                        <Date>
                            {post.createdAt.substring(0, 10)}
                            {' - '}
                            {post.createdAt.substring(11, 16)}
                        </Date>
                    </CreatorWrap>
                </Creator>
            </CreatorContent>
            <BookmarksWrap>
                <Bookmarks />
                <EditBtn onClick={() => setCurrentId(post._id)}><HiDotsHorizontal /></EditBtn>
            </BookmarksWrap>
            <TagsWrap>
                <Tags>{post.tags.map((tag) => `#${tag} `)}</Tags>
            </TagsWrap>
            <PostContent>
                <PostMessage>{post.message}</PostMessage>
            </PostContent>
            <PostPicture>{/*<Img src={post.image} alt='picture' />*/}</PostPicture>                                  
            <PostActions>
                <Btn>
                    <Icon><AiOutlineLike /></Icon>
                    <p>Like</p>
                </Btn>
                <Btn>
                    <Icon><GoCommentDiscussion /></Icon>
                    <p>Comment</p>
                </Btn>
                <Btn onClick={() => dispatch(deletePost(post._id))}>
                    <Icon><AiFillDelete /></Icon>
                    <p>Delete</p>
                </Btn>
            </PostActions>
        </PostContainer>
    )
}

// const Post = () => {
//     return (
//         <PostContainer>
//             <CreatorWrap>
//                 <Creator>
//                     <ProfilePic><ImgProfile src={profile2} alt='man' /></ProfilePic>
//                     <p>Tommy Johnson</p>
//                 </Creator>
//                 <Date>1 hour ago</Date>
//             </CreatorWrap>
//             <BookmarksWrap>
//                 <Bookmarks><FiBookmark /></Bookmarks>
//             </BookmarksWrap>
//             <TagsWrap>
//                 <Tags>#chill #relax #peace</Tags>
//             </TagsWrap>
//             <PostContent>
//                 <PostMessage>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus voluptates illo libero et impedit, rem repellat nostrum omnis sit beatae reprehenderit debitis, esse autem deleniti vitae architecto consequuntur inventore?</PostMessage>
//             </PostContent>
//             <PostPicture><Img src={img1} alt='beach' /></PostPicture>            
//             <PostActions>
//                 <Btn>
//                     <Icon><AiOutlineLike /></Icon>
//                     <p>Like</p>
//                 </Btn>
//                 <Btn>
//                     <Icon><GoCommentDiscussion /></Icon>
//                     <p>Comment</p>
//                 </Btn>
//                 <Btn>
//                     <Icon><AiFillDelete /></Icon>
//                     <p>Delete</p>
//                 </Btn>
//             </PostActions>
//         </PostContainer>
//     )
// }


export default Post

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 0 0 2rem;
    margin-right: 1.5rem;
    border-radius: 4px;
    position: relative;
    color: #1e3866;
    background: #f2f2f2;

    @media screen and (max-width: 880px) {
        margin-right: 0;
        margin-left: 0;
    } 
`;

const CreatorContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0 1rem 1.5rem;
`;

const Creator = styled.div`
    display: flex;
    align-items: center;
`;

const CreatorWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const CreatorName = styled.h3`
    font-size: 1.1rem;
`;

const ProfilePic = styled.div`
    height: 3.2rem;
    width: 3.2rem;
    margin-right: 1rem;
`;

const ImgProfile = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 2px solid #ec1e84;
    /* border: 2px solid #27477f; */
`;

const Date = styled.p`
    font-size: .75rem;
    /* margin-top: .4rem; */
`;

const BookmarksWrap = styled.div`
    position: absolute;
    top: 30px;
    right: 25px;
    color: #3764af;
`;

const Bookmarks = styled(FiBookmark)`
    font-size: 1.9rem;
    cursor: pointer;
`;

const EditBtn = styled.button`
    font-size: 1.7rem;
    cursor: pointer;
    margin-left: 10px;
    outline: none;
    border: none;
    color: #3764af;
`;

const TagsWrap = styled.div`
    margin: .7rem 0 1.5rem 1.5rem;
`;
const Tags = styled.p`
    font-size: .8rem;
`;

const PostContent = styled.div`
    margin: .2rem 1.5rem 1.8rem 1.5rem;
`;

const PostMessage = styled.p`
    line-height: 1.5;
`;

const PostPicture = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
// const Img = styled.img`
//     width: 100%;
//     height: 100%;
// `;
const PostActions = styled.div`
    display: flex;
    justify-content: space-evenly;
    border-top: 1px solid #d6d6d6;
`;

const Icon = styled.i`
    margin-right: 5px;
    display: flex;
    align-items: center;
`;

const Btn = styled.button`
    font-size: 1rem;
    color: #fff;
    color: #3764af;
    background: transparent;
    cursor: pointer;
    outline: none;
    border: none;
    margin: 1rem;
    display: flex;
    align-items: center;
    padding: 6px 16px;
    border-radius: 4px;

    @media screen and (max-width: 500px) {
        font-size: 1.2rem;

        p {
            display: none;
        }
    } 
`;
