import React from 'react'
import styled from 'styled-components'
import Form from '../components/Form'
import Posts from '../components/Posts'

const Home = () => {
    return (
        <ContentContainer>
            <ContentWrap>
            <Form />
            <Posts />
            </ContentWrap>
        </ContentContainer>
    )
}

export default Home

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    background: #d6d6d6;
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


