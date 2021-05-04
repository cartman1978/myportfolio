import React from 'react';


// Import Icons
import webdesign from '../img/webdesign.png';
import backend from '../img/backend.png';
import web from '../img/web.jpg';
import html from '../img/html.png';

// Styles
import { About, Description, Image } from "../styles";
import styled from 'styled-components';
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';
const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (

        <Skills
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}>
            <Description>
                <h2>My <span>skills</span></h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={webdesign} alt="frontend" />
                            <h3> Frontend</h3>
                        </div>
                        <p>I like to code things from scratch, and bringing ideas to life in the browser.</p>

                        <List>
                            <ul>
                                <li> <img src={html} alt="html" />HTML</li>
                                <li>CSS</li>
                                <li>Sass</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Material UI</li>
                            </ul>



                        </List>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={backend} alt="backend" />
                            <h3> Backend</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={web} alt="web" />
            </Image>

        </Skills>


    )

};

const Skills = styled(About)`
 
    
    h2 {
        padding-bottom: 5rem;
        
    }
   

    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
    }


`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
    }
    h3 {
        background: #fff;
        color: #000;
        margin-left: 1rem;
        padding: 1rem;
    }
`;

const List = styled.div`
    ul {
    list-style: none;
	margin: 0;
	padding: 0;
    }

`;

export default ServicesSection










