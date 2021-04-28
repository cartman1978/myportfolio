import React from 'react';
import profile from "../img/profile.jpg";

const AboutSection = () => {
    return (
        <div>
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
        </div>
    )
}

export default AboutSection
