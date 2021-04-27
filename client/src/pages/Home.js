import React, {useState} from 'react'
import styled from 'styled-components'
import Form from '../components/Form'
import Posts from '../components/Posts'
import Navbar from '../components/Navbar'

const Home = () => {
    const [currentId, setCurrentId] = useState(null)

    return (
        <>
        <Navbar />
        <ContentContainer>
            <ContentWrap>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Posts setCurrentId={setCurrentId} />
            </ContentWrap>
        </ContentContainer>
        </>
    )
}

export default Home

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    background: #d6d6d6;
    background: #ccc;
    width: 100%;
`

const ContentWrap = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
    max-width: 1300px;
    width: 100%;
    margin-bottom: 2rem;

    @media screen and (max-width: 880px) {
        flex-direction: column;
        align-items: center;
        max-width: none;
    } 
`;


