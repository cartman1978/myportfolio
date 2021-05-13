import React from 'react';
import profile from "../img/me.jpg";
import GitHubButton from 'react-github-btn';
//Styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

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
                            I'm <span id="span">Fabio</span>
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>a Web Developer</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    I like to code things from scratch, and bringing ideas to life in the browser.
                    Contact me if you need help in creating amazing website.</motion.p>
                <motion.button variants={fade}><a id="btn-cont" href="/contact">Contact</a></motion.button>
                <motion.button variants={fade}> <a id="btn-git" href="https://github.com/cartman1978" target="_blank" rel="noreferrer">Follow @cartman1978</a> </motion.button>
                
            </Description>
            
            <Image>
                <motion.img variants={photoAnim} src={profile} alt="Fabio Torti" />
            </Image>
            <Wave />
        </About>
    )
};



export default AboutSection
