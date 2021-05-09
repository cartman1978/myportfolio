import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { projectState } from '../projectState';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

import { BsArrowLeft } from "react-icons/bs";

const ProjectDetails = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [projects, setProjects] = useState(projectState);
    const [project, setProject] = useState(null);

    //UseEffect
    useEffect(() => {
        const currentProject = projects.filter((stateProject) => stateProject.url === url);
        setProject(currentProject[0])
    }, [projects, url]);


    return (
        <>
            { project && (

                <Details
                    exit="exit"
                    variants={pageAnimation}
                    initial="hidden"
                    animate="show"
                >
                    <HeadLine>
                        <h2>{project.title}</h2>
                        <img src={project.mainImg} alt="project" />
                    </HeadLine>
                    <Awards>
                        {project.awards.map((award) => (
                            <Award
                                title={award.title}
                                description={award.description}
                                key={award.title}
                            />

                        ))}
                        <button>


                            <a href="/projects"> <BsArrowLeft /> </a>
                        </button>
                    </Awards>

                </Details>
            )}
        </>
    );
};

const Details = styled(motion.div)`
    color: #fff;
    button {
        margin-top: 1rem;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
    @media (max-width: 768px) {
    button {
        margin: 5rem;
        margin-top: 0.5rem;
    }
        }
`;

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
       
    }
    @media (max-width: 768px) {
            h2 {
                font-size: 1.7rem;
            }
        }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: center;
    @media (max-width: 1500px) {
        display: block;
        margin: 2rem 2rem;
    }
`;

const AwardStyle = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background: #f7c456;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p {
        padding: 2rem 0rem;
    }
`;


//Award Component
const Award = ({ title, description }) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

export default ProjectDetails;
