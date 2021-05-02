import React from 'react';
import profile from "../img/profile.jpg";
//Styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from 'framer-motion';

const AboutSection = () => {


    return (
        <About>
            <Description>
                <motion.div>

                    <Hide>
                        <motion.h2

                        >Hi!</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 >
                            I'm <span>Fabio</span>
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 >a Web Developer</motion.h2>
                    </Hide>
                </motion.div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, unde! Dolorem quod nam qui deserunt odit consequuntur accusamus veritatis sed?</p>
                <button>Contact</button>
            </Description>
            <Image>
                <img src={profile} alt="Fabio Torti" />
            </Image>
        </About>
    )
};



export default AboutSection
