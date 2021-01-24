import React from 'react'
import styled from 'styled-components'
import Form from './Form'
import Posts from './Posts'

const MainContent = () => {
    return (
        <ContentContainer>
            <Form />
            <Posts />
        </ContentContainer>
    )
}

export default MainContent

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    background: #d6d6d6;
    position: relative;
    
`;
