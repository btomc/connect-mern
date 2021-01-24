import React from 'react'
import styled from 'styled-components'
import FileBase from 'react-file-base64'

const Form = () => {
    return (
        <FormContainer>
            <FormHeading>Creating a Post</FormHeading>
            <PostForm>
                <form autoComplete='off'>
                    <FormWrap>
                        <input name="creator" placeholder="Creator"  />
                        <textarea name="message" placeholder="Message" ></textarea>
                        <input name="tags" placeholder="Tags (coma separated)" />
                        <FileWrap><FileBase type='file' /></FileWrap>
                        <BtnSubmit type='submit'>Submit</BtnSubmit>
                        <BtnClear>Clear</BtnClear>
                    </FormWrap>
                </form>
            </PostForm>
        </FormContainer>
    )
}

export default Form

const FormContainer = styled.div`
    background: #f2f2f2;
    border: 2px solid #3764af;
    border: 2px solid #cccccc;
    margin: 2rem 2rem 2rem 0 ;
    border-radius: 4px;
    color: #274882;
    max-height: 600px;
`;

const FormHeading = styled.h2`
    text-align: center;
    margin: 1.5rem 0 1.5rem 0;
`;

const PostForm = styled.div`
    min-width: 380px;
`;

const FormWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input,
    textarea {
        padding: 14px 32px 14px 16px;
        border-radius: 6px;
        outline: none;
        width: 280px;
        color: #274882;
        margin-bottom: 1.5rem;
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
        height: 120px;
    }
`;

const FileWrap = styled.div`
    border: none;
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

    &:hover {
        opacity: 0.8;
    }
`;

