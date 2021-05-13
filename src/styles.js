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
    @media (max-width: 1300px) {
            padding: 0;
            button {
                margin: 2rem 0rem 5rem 0rem;
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

// export const ImageSkill = styled.div`
//     z-index: 2;
//     flex: 1;
//     overflow: hidden;
//     img {
//         width: 100%;
//         height: 50vh;
//         object-fit: cover;
//         @media (max-width: 375px) {
//             display: none;
//         }
//         @media (max-width: 768px) {
//             display: none;
//         }
//     }

// `;

export const Hide = styled.div`
    overflow: hidden;
`;
