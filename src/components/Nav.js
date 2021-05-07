import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Dev_Cartman</Link></h1>
            <ul>
                <li>
                    <Link to="/">About me</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/" ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/projects" ? "50%" : "0%" }} />
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/contact" ? "50%" : "0%" }} />
                </li>
            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: fixed;
    top: 0;
    z-index: 10;
   
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
    @media (max-width: 960px) {
        display: none;
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
        display: inline-block;
        margin: 1rem;
    }
    ul {
        padding: 2rem;
        justify-content: space-around;
        width: 100%;
    li {
        padding: 0;
        }
        }
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #f7c456;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;
    @media (max-width: 1300px) {
        left: 60%;
    }
`;

export default Nav;
