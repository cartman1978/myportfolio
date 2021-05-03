import React, { useState } from 'react';
import styled from "styled-components";
import { About } from "../styles";
import Toggle from './Toggle';

const MySkills = () => {

    return (
        <Service>
            <h2>See what <span>I can do</span></h2>
            <Toggle>
                <div className="question">
                    <h4>Who I Am?</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laborum!
                        </p>

                    </div>
                    <div className="service-line"></div>
                </div>
            </Toggle>
            <div className="question">
                <h4>Responsive Design</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laborum!
                </p>
                </div>
            </div>
            <div className="question">
                <h4>Full stack Development</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laborum!
                </p>
                </div>
                <div className="service-line"></div>
            </div>

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
