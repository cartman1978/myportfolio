import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Dev_Cartman</Link></h1>
            <ul>
                <li>
                    <Link to="/">About me</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    a {
        color: #fff;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;
    }

    #logo{
        font-size: 1.6rem;
        font-family: 'Pacifico', cursive;
        font-weight: lighter;
    }

    li {
        padding-left: 10rem;
        position: relative;
    }
`;

export default Nav;
