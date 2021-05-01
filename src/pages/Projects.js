import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Images
import mario from '../img/mario.jpg';
import tour from '../img/tour.png';
import sport from '../img/sport.png';
import videogame from '../img/videogame.jpg';

const Projects = () => {
    return (
        <Work>
            <Website>
                <h2>Super Mario</h2>
                <div className="line"></div>
                <Link to="/projects/supermario">
                    <img src={mario} alt="supermario" />
                </Link>
            </Website>
            <Website>
                <h2>Hiking Tour</h2>
                <div className="line"></div>
                <Link to="/projects/tour">
                    <img src={tour} alt="tour" />
                </Link>
            </Website>
            <Website>
                <h2>Sport News</h2>
                <div className="line"></div>
                <Link to="/projects/sport-news">
                    <img src={sport} alt="sport-news" />
                </Link>
            </Website>
            <Website>
                <h2>Videogame Quizzes</h2>
                <div className="line"></div>
                <Link to="/projects/videogames">
                    <img src={videogame} alt="videogame" />
                </Link>
            </Website>
        </Work>
    )
};

const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
`;

const Website = styled.div`
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

export default Projects;
