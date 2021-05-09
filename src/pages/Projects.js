import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Images
import mario from '../img/mario.jpg';
import tour from '../img/tour.png';
import sport from '../img/sport.png';
import videogame from '../img/videogame.jpg';
// Animation
import { motion } from 'framer-motion';
import {
    pageAnimation,
    fade,
    photoAnim,
    lineAnim,
    slider,
    sliderContainer,
} from '../animation';
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const Projects = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();
    return (
        <Work
            style={{ background: "#fff" }}
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Website>
                <motion.h2 variants={fade}>Super Mario</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/projects/supermario">
                    <Hide>
                        <motion.img variants={photoAnim} src={mario} alt="supermario" />
                    </Hide>
                </Link>
            </Website>
            <Website
                ref={element}
                variants={fade}
                animate={controls}
                initial="hidden">
                <h2>Hiking Tour</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/projects/tour">
                    <motion.img variants={photoAnim} src={tour} alt="tour" />
                </Link>
            </Website>
            <Website
                ref={element2}
                variants={fade}
                animate={controls2}
                initial="hidden"
            >
                <motion.h2 variants={fade}>Sport News</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/projects/sport-news">
                    <motion.img variants={photoAnim} src={sport} alt="sport-news" />
                </Link>
            </Website>
            <Website
                ref={element3}
                variants={fade}
                animate={controls3}
                initial="hidden"
            >
                <motion.h2 variants={fade}>Videogame Quizzes</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/projects/videogames">
                    <motion.img variants={photoAnim} src={videogame} alt="videogame" />
                </Link>
            </Website>
            <ScrollTop />
        </Work>
    )
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    @media (max-width: 1300px) {
        padding: 2rem 2rem;
    }
    h2 {
        padding: 1rem 0rem;
    }
`;

const Website = styled(motion.div)`
    position: relative;
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #f7c456;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #044DF6;
`;

const Frame3 = styled(Frame1)`
    background: #F39F00;
`;

const Frame4 = styled(Frame1)`
    background: #1a1919;
`;




export default Projects;
