import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <StyledNav>
            <h1><a href="#">Dev_Cartman</a></h1>
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
`;

export default Nav;
