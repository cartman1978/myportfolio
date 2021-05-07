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
            <ul>
                <li>

                </li>
            </ul>

        </Menu>


    )
}

export default MobNav;


