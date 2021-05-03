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
            <h2>See what <span>I can do</span></h2>
            <AnimateSharedLayout>
                <Toggle title="Who I Am?">


                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laborum!
                        </p>

                    </div>


                </Toggle>
                <Toggle title="Responsive Design">


                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laborum!
                </p>
                    </div>

                </Toggle>
                <Toggle title="Full stack Development">


                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laborum!
                </p>
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
