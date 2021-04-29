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
                <Link>
                    <img src={mario} alt="supermario" />
                </Link>
            </Website>
            <Website>
                <h2>Hiking Tour</h2>
                <div className="line"></div>
                <Link>
                    <img src={tour} alt="supermario" />
                </Link>
            </Website>
            <Website>
                <h2>Sport News</h2>
                <div className="line"></div>
                <Link>
                    <img src={sport} alt="supermario" />
                </Link>
            </Website>
            <Website>
                <h2>Videogame Quizzes</h2>
                <div className="line"></div>
                <Link>
                    <img src={videogame} alt="supermario" />
                </Link>
            </Website>
        </Work>
    )
};

const Work = styled.div`
    min-height: 100vh;
`;

const Website = styled.div`
    padding-bottom: 10rem;
`;

export default Projects;
