import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <StyledNav>
            <h1><a id="logo" href="#">Dev_Cartman</a></h1>
            <ul>
                <li>
                    <a href="#">About me</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
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
