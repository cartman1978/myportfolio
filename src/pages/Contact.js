import React from 'react';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';
// Import Images
import email from '../img/email.png';
import linkedin from '../img/linkedin.png';
import twitter from '../img/twitter.png';

const Contact = () => {
    return (
        <ContactStyle
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            style={{ background: "#5959f2" }}
        >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <img src={email} alt="email" />
                        <h2>Send an Email</h2>
                    </Social>
                </Hide>

                <Hide>
                    <Social variants={titleAnim}>
                        <img src={linkedin} alt="linkedin" />
                        <h2>LinkedIn</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <img src={twitter} alt="twitter" />
                        <h2>Twitter</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)` 
    padding: 5rem 10rem;
    color: #f7c456;
    min-height: 90vh;
    @media (max-width: 1500px) {
        padding: 2rem;
        font-size: 1rem;
    }
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: #f7c456;
    @media (max-width: 1500px) {
        margin-top: 5rem;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #f7c456;
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
`;

export default Contact;