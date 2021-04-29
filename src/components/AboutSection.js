import React from 'react';
import profile from "../img/profile.jpg";
//Styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

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



export default AboutSection
