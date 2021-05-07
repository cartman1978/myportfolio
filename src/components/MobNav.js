import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const MobNav = (props) => {
    const { pathname } = useLocation();
    return (
        <Menu {...props}>
            <ul id="navItem">
                <li id="navList">
                    <Link to="/">About Me</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/" ? "50%" : "0%" }}
                    />
                </li>
            </ul>
            <ul id="navItem">
                <li id="navList">
                    <Link to="/projects">Projects</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/projects" ? "50%" : "0%" }}
                    />
                </li>
            </ul>
            <ul id="navItem">
                <li id="navList">
                    <Link to="/contact">Contact Me</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
                    />
                </li>
            </ul>

        </Menu>


    )
};

const Line = styled(motion.div)`
    height: 0.2rem;
    background:  #FF8C00;
    width: 10%;
    position: absolute;
    bottom: -20%;
    left: 60%;
    @media (max-width: 1300px) {
        left: 13%;
    }
`;

export default MobNav;


