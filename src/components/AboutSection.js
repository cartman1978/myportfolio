import React from 'react';
import profile from "../img/profile.jpg";
//Styled
import styled from "styled-components";

const AboutSection = () => {
    return (
        <About>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Hi!</h2>
                    </div>
                    <div className="hide">
                        <h2>
                            I'm <span>Fabio</span>
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>a Web Developer</h2>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, unde! Dolorem quod nam qui deserunt odit consequuntur accusamus veritatis sed?</p>
                <button>Contact</button>
            </div>
            <div className="image">
                <img src={profile} alt="Fabio Torti" />
            </div>
        </About>
    )
};

// Styled Components
const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 10rem;
    color: white;
`

export default AboutSection
