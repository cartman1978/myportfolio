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
                        <a href="mailto:cartman_7802@yahoo.ie">Send an Email</a>
                    </Social>
                </Hide>

                <Hide>
                    <Social variants={titleAnim}>
                        <img src={linkedin} alt="linkedin" />
                        <a href="https://www.linkedin.com/in/fabio-torti-ab171257/" target="_blank" rel="noreferrer" aria-label="linkedin" >LinkedIn</a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <img src={twitter} alt="twitter" />
                        <a href="https://twitter.com/cartman78manolo" target="_blank" rel="noreferrer" aria-label="twitter" >Twitter</a>
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
        margin-top: 7rem;
    }

    @media (min-width: 1600px) {
        margin-top: 9rem;
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
    a {
        margin: 2rem;
        text-decoration: none;
        color: #f7c456;
        font-size: 3rem;
    }
    img {
        cursor: pointer;
    }
`;

export default Contact;