import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import profile1 from '../images/profile.jpg'
import {HiOutlineSearch} from 'react-icons/hi'
import {FiBookmark} from 'react-icons/fi'

const Navbar = () => {
    return (
        <Nav>
            <NavLogo to='/'>
                <LogoIcon><Icon src={logo} alt='logo'/></LogoIcon>
                <LogoText>Connect</LogoText>
            </NavLogo>
            <NavMenu>
                <SearchWrapper>
                    <SearchBar type='text' placeholder='Search Connect' />
                    <BtnSearch><HiOutlineSearch /></BtnSearch>
                </SearchWrapper>
                <ProfileWrapper>
                    <PhotoWrap><Img src={profile1} alt='person' /></PhotoWrap>
                    <Name>Alice Campbell</Name>
                    <Favourites><FiBookmark /></Favourites>
                    <LogoutBtn>Logout</LogoutBtn>
                </ProfileWrapper>
            </NavMenu>
        </Nav>
    )
}

export default Navbar


const Nav = styled.div`
    background: #3764af;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 2.5rem 0;
    justify-content: space-between;
`;
const NavLogo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
`;
const LogoIcon = styled.div`
    height: 3rem;
    width: 3rem;
    margin-right: 4px;
`;

const Icon = styled.img`
    height: 100%;
    width: 100%;
`;
const LogoText = styled.p`
    color: #f7f7f7;
    font-size: 1.5rem;    
`;
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-right: 1.5rem;
`;

const SearchWrapper = styled.div`
    width: 330px;
    display: flex;
    position: relative;
    margin-left: 2.5rem;
`;

const SearchBar = styled.input`
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    padding: 12px 20px;
    width: 80%;
    outline: none;
`;

const BtnSearch = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    top: 0;
    right: 66px;
    background: #f7f7f7;
    background: transparent;
    color: #3764af;
    font-size: 1rem;
    padding: 15px 18px;
    border-radius: 50px;
    cursor: pointer;
    outline: none;
    font-size: 1.1rem;
    
    &:hover {
        background: #f4f4f4;
        /* background: #222; */
    }
`;

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const PhotoWrap = styled.div`
    height: 3.5rem;
    width: 3.5rem;
    margin-right: 1rem;
`;

const Img = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 2px solid #ec1e84;
`;

const Name = styled.p`
    color: #fff;
`;

const Favourites = styled(FiBookmark)`
    color: #f7f7f7;
    margin: 0 1rem;
    font-size: 2rem;
    cursor: pointer;
    transition: .3s;

    &:hover {
        opacity: 0.6;
    }
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
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;

    &:hover {
        opacity: 0.8;
    }
`;
