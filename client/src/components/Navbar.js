import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import profile1 from '../images/profile.jpg'
import {HiOutlineSearch} from 'react-icons/hi'
import {FiBookmark} from 'react-icons/fi'
import {TiArrowSortedDown} from 'react-icons/ti'
import Sidebar from '../components/Sidebar'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Nav>
            <NavLogo to='/'>
                <LogoIcon><Icon src={logo} alt='logo'/></LogoIcon>
                <LogoText>Connect</LogoText>
            </NavLogo>
            <NavMenu>
                <SearchWrapper>
                    <BtnSearch><IconSearch /></BtnSearch>
                    {/* <SearchBar type='text' placeholder='Search Connect' /> */}
                </SearchWrapper>
                <ProfileWrapper>
                    <PhotoWrap><Img src={profile1} alt='person' /></PhotoWrap>
                    <Name>Alice Campbell</Name>
                    <Favourites><FiBookmark /></Favourites>
                    <Dropdown onClick={toggle}><TiArrowSortedDown /></Dropdown>
                    <Sidebar isOpen={isOpen} toggle={toggle} />
                </ProfileWrapper>
            </NavMenu>
        </Nav>
    )
}

export default Navbar


const Nav = styled.nav`
    /* background: #3764af; */
    background: #122566;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    position: sticky;
    z-index: 999;
    top: 0;
`;

// const NavContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     height: 80px;
//     z-index: 1;
//     width: 100%;
// `;

const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
    text-decoration: none;

    @media screen and (max-width: 470px) {
        margin-left: 1rem;
    }
`;
const LogoIcon = styled.div`
    height: 2.7rem;
    width: 2.7rem;
    margin-right: 4px;
`;

const Icon = styled.img`
    height: 100%;
    width: 100%;
`;
const LogoText = styled.p`
    color: #f7f7f7;
    font-size: 1.4rem;    

    @media screen and (max-width: 470px) {
        display: none;
    }
`;
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-right: 1.5rem;

    @media screen and (max-width: 470px) {
        margin-right: 1rem;
    }
`;

const SearchWrapper = styled.div`
    width: 330px;
    display: flex;
    position: relative;
    margin-left: 1.8rem;

    @media screen and (max-width: 880px) {
        width: 30px;
    } 

    @media screen and (max-width: 470px) {
        margin-left: .5rem;
    }
`;

// const SearchBar = styled.input`
//     border: none;
//     border-radius: 50px;
//     font-size: 1rem;
//     padding: 12px 20px;
//     width: 80%;
//     outline: none;
// `;

const IconSearch = styled(HiOutlineSearch)`
    z-index: 99;
    color: #f7f7f7;
`;

const BtnSearch = styled.button`
    /* position: absolute; */
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    top: 0;
    right: 66px;
    /* background: #f7f7f7; */
    background: transparent;
    /* color: #3764af; */
    color: #f7f7f7;
    font-size: 1rem;
    padding: 15px 18px;
    padding: 12px 13px;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    font-size: 1.5rem;
    
    &:hover {
        background: rgba(204,204,204,0.2);
    }
`;

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const PhotoWrap = styled.div`
    height: 3.1rem;
    width: 3.1rem;
    margin-right: 1rem;

    @media screen and (max-width: 610px) {
        margin-right: 0;
    } 
`;

const Img = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 2px solid #ec1e84;
`;

const Name = styled.p`
    color: #fff;

    @media screen and (max-width: 610px) {
        display: none;
    } 
`;

const Favourites = styled(FiBookmark)`
    color: #f7f7f7;
    margin: 0 .5rem 0 1rem;
    font-size: 2rem;
    cursor: pointer;
    transition: .2s;

    &:hover {
        /* opacity: 0.6; */
        /* color: #27477f; */
        color: #3764af;
    }
`;

const Dropdown = styled(TiArrowSortedDown)`
    color: #f7f7f7;
    margin: 0 1rem 0 0;
    font-size: 2rem;
    cursor: pointer;
    transition: .2s;

    &:hover {
        /* opacity: 0.6; */
        /* color: #27477f; */
        color: #3764af;
    }
`;

