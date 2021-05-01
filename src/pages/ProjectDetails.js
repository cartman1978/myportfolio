import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { projectState } from '../projectState';

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

                <Details>
                    <HeadLine>
                        <h2>{project.title}</h2>
                        <img src={project.mainImg} alt="project" />
                    </HeadLine>
                </Details>
            )}
        </>
    );
};

const Details = styled.div`

`;

const HeadLine = styled.div`

`;

export default ProjectDetails;
