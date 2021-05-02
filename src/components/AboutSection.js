import React from 'react';
import profile from "../img/profile.jpg";
//Styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';

const AboutSection = () => {


    return (
        <About>
            <Description>
                <motion.div>

                    <Hide>
                        <motion.h2
                            variants={titleAnim}
                        >Hi!</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            I'm <span>Fabio</span>
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>a Web Developer</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, unde! Dolorem quod nam qui deserunt odit consequuntur accusamus veritatis sed?</motion.p>
                <motion.button variants={fade}>Contact</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={profile} alt="Fabio Torti" />
            </Image>
        </About>
    )
};



export default AboutSection
