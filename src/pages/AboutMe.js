import React from 'react';
// Page Components
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServicesSection";
import MySkills from "../components/MySkills";
// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutMe = () => {
    return (
        <>
            <motion.div
                exit="exit"
                initial="hidden"
                animate="show"
                variants={pageAnimation}>
                <AboutSection />
                <ServiceSection />
                <MySkills />
            </motion.div>
        </>
    );


}

export default AboutMe;
