import React, { useState } from 'react';
import styled from "styled-components";
import { About } from "../styles";
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const MySkills = () => {
    const [element, controls] = useScroll();
    return (
        <Service
            variants={scrollReveal}
            ref={element}
            animate={controls}
            initial="hidden"
        >
            <h2>About <span id="span">Fabio</span></h2>
            <AnimateSharedLayout>
                <Toggle title="About Me">


                    <div className="answer">
                        <p>I love coding and making things, from wireframes to design to code. I cover every step of the process in getting a website launched.</p>
                        <p>My goal is to build fast, mobile-first websites that clearly communicate with visitors.</p>
                    </div>


                </Toggle>
                <Toggle title="Responsive Design">


                    <div className="answer">
                        <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

                    </div>

                </Toggle>
                <Toggle title="Full stack Development">


                    <div className="answer">


                        <p>Able to build interactive user interfaces with the help of HTML/CSS and JavaScript frameworks and libraries. </p>
                        <p>Able to build a robust backend architecture to fetch data from the servers.</p>
                        <p>Ensuring Cross Platform compatibility - Applications must run smoothly on all operating systems like Windows, MacOS, and Linux. </p>
                        <p>API development - Depending on the application architecture, I'm responsible for API creation. These APIs perform crucial tasks like fetching data from the server. </p>


                    </div>


                </Toggle>
            </AnimateSharedLayout>
        </Service>
    )
};

const Service = styled(About)`
    display: block;
    span {
        display: block;
    }
    
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .service-line {
      background: #f7c456;
      height: 0.2rem;
      margin: 2rem 0rem;
      width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default MySkills
