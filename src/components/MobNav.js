import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const toggleMenu = ({ isOpen }) => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    isOpen
        ? menuWrap.setAttribute("aria-hidden", false)
        : menuWrap.setAttribute("aria-hidden", true);
};


const MobNav = (props) => {

    const { pathname } = useLocation();
    return (
        <MiniNav>
            <Menu noOverlay onStateChange={toggleMenu}>
                <a className="menu-item" href="/">
                    About Me
                <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/" ? "50%" : "0%" }}
                    />
                </a>


                <a className="menu-item" href="/projects">
                    Projects
                <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/projects" ? "50%" : "0%" }}
                    />
                </a>
                <a className="menu-item" href="/contact">
                    Contact
                <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
                    />
                </a>
            </Menu>
        </MiniNav>
    )
};

const Line = styled(motion.div)`
    height: 0.2rem;
    background:  #f2c994;
    width: 10%;
    position: absolute;
    bottom: -20%;
    left: 60%;
    @media (max-width: 1300px) {
        left: 13%;
    }
`;

const MiniNav = styled.div`
   min-height: 10vh;
   width: 100%;
   background: #282828;
   position: fixed;
    top: 0;
    z-index: 10;
`;

export default MobNav;


