import styled from "styled-components";
import { motion } from 'framer-motion';
// Styled Components
export const About = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 10rem;
    color: white;
    @media (max-width: 1300px) {
            display: block;
            padding: 12rem 2rem;
            text-align: center;
        }
`;

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    z-index: 2;
    h2 {
        font-weight: lighter;
    }
    #btn-cont {
        text-decoration: none;
        color: #fff;
    }
    #btn-git {
        text-decoration: none;
        color: #fff;
       margin-left: 12px;
    }

    #git {
        color: #000;
        font-size: 1.2rem;
    }
    @media (max-width: 1300px) {
            padding: 0;
            button {
                margin: 2rem 0rem 5rem 0rem;
            }
        }

        @media (max-width: 768px) {
            padding: 0;
            button {
                margin: 2rem 1rem 0.3rem 0rem;
            }
        }
`;

export const Image = styled.div`
    z-index: 2;
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        margin-top: 3rem;
        border-radius: 5rem;
        object-fit: cover;
    
    }
    
`;

export const Hide = styled.div`
    overflow: hidden;
`;
