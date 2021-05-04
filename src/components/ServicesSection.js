import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


// Import Icons
import webdesign from '../img/webdesign.png';
import backend from '../img/backend.png';
import web from '../img/web.jpg';
import html from '../img/html.png';
import css from '../img/css.png';
import sass from '../img/sass.png';




// Styles
import { About, Description, Image } from "../styles";
import styled from 'styled-components';
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const ServicesSection = () => {
    const classes = useStyles();
    const [element, controls] = useScroll();
    return (

        <Skills
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}>
            <Description>
                <h2>My <span>skills</span></h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={webdesign} alt="frontend" />
                            <h3> Frontend</h3>
                        </div>
                        <p>I like to code things from scratch, and bringing ideas to life in the browser.</p>

                        <List className={classes.root}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>

                                    <img src={html} alt="frontend" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="HTML"
                                    secondary={

                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >

                                        </Typography>


                                    }
                                />
                            </ListItem>

                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>

                                    <img src={css} alt="css" />

                                </ListItemAvatar>
                                <ListItemText
                                    primary="CSS"
                                    secondary={

                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >

                                        </Typography>


                                    }
                                />
                            </ListItem>

                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <img src={sass} alt="sass" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Sass"
                                    secondary={

                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >

                                        </Typography>


                                    }
                                />
                            </ListItem>
                        </List>




                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={backend} alt="backend" />
                            <h3> Backend</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>



            </Description>
            <Image>
                <img src={web} alt="web" />
            </Image>




        </Skills>


    )

};

const Skills = styled(About)`
 
    
    h2 {
        padding-bottom: 5rem;
        
    }
   

    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
    }


`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
    }
    h3 {
        background: #fff;
        color: #000;
        margin-left: 1rem;
        padding: 1rem;
    }
`;



export default ServicesSection










