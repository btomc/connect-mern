import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import {IoMdPerson} from 'react-icons/io'
import {MdCollectionsBookmark} from 'react-icons/md'

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/myposts'><MdCollectionsBookmark style={{ marginRight: '.8rem'}} />My Posts</SidebarLink>
                <SidebarLink to='/'><IoMdPerson style={{ marginRight: '.8rem'}} />Profile</SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <LogoutBtn>Logout</LogoutBtn>
            </SidebarBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #10225b;
    background: #142970;
    display: grid;
    align-items: center;
    top: 0;
    transition: .3s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

const CloseIcon = styled(FaTimes)`
    color: #f7f7f7;
`;

const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 80px);
    text-align: center;

    @media screen and (max-width: 400px) {
        grid-template-rows: repeat(2, 60px);
    }
`;

const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    text-decoration: none;
    list-style: none;
    transition: .2s ease-in-out;
    color: #f7f7f7;
    cursor: pointer;

    &:hover {
        color: #ec1e84;
        transition: .2s ease-in-out;
    }
`;

const SidebarBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const LogoutBtn = styled.div`
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
    padding: 16px 64px;
    border-radius: 4px;
    color: #fff;
    font-size: 1rem;
    text-transform: uppercase;

    &:hover {
        opacity: 0.8;
    }
`;
