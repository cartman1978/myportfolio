import React from 'react';
import profile from "../img/profile.jpg";
//Styled
import styled from "styled-components";

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>Hi!</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            I'm <span>Fabio</span>
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>a Web Developer</h2>
                    </Hide>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, unde! Dolorem quod nam qui deserunt odit consequuntur accusamus veritatis sed?</p>
                <button>Contact</button>
            </Description>
            <Image>
                <img src={profile} alt="Fabio Torti" />
            </Image>
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
`;

const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`;

const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

export default AboutSection
