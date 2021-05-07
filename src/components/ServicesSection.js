import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


// Import Icons
import webdesign from '../img/webdesign.png';
import backend from '../img/backend.png';
import web from '../img/web.jpg';
import html from '../img/html.png';
import css from '../img/css.png';
import sass from '../img/sass.png';
import js from '../img/javascript.png';
import reactImg from '../img/react.png';
import bootstrap from '../img/bootstrap.png';
import python from '../img/python.png';
import mongodb from '../img/mongodb.png';
import nodejs from '../img/node-js.png';
import mysql from '../img/mysql.png';
import django from '../img/django.png';



// Styles
import { About, Description, ImageSkill } from "../styles";
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

                        <Grid container spacing={2} justify='center'>
                            <Grid item xs={12} md={6} >
                                <List id="grid-container" className={classes.root} style={{ height: '330px' }} >
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
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>

                                            <img src={js} alt="javascript" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Javascript"
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

                                            <img src={reactImg} alt="javascript" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="React.js"
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

                                            <img src={bootstrap} alt="bootstrap" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Bootstrap"
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
                            </Grid>
                        </Grid>

                        {/* second card*/}

                    </Card>


                    <Card>
                        <div className="icon">
                            <img src={backend} alt="backend" />
                            <h3> Backend</h3>
                        </div>

                        <Grid container spacing={2} justify='center'>
                            <Grid item xs={12} md={6} >
                                <List id="grid-container" className={classes.root} style={{ height: '330px' }} >
                                    <ListItem alignItems="center">
                                        <ListItemAvatar>

                                            <img src={django} alt="django" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Django"
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

                                    <ListItem alignItems="center">
                                        <ListItemAvatar>

                                            <img src={python} alt="python" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Python"
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

                                    <ListItem alignItems="center">
                                        <ListItemAvatar>

                                            <img src={mongodb} alt="mongoDb" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="MongoDb"
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

                                    <ListItem alignItems="center">
                                        <ListItemAvatar>

                                            <img src={nodejs} alt="node" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Node.js"
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

                                    <ListItem alignItems="center">
                                        <ListItemAvatar>

                                            <img src={mysql} alt="mysql" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="MySql"
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
                            </Grid>
                        </Grid>
                    </Card>


                </Cards>



            </Description>
            <ImageSkill>
                <img className="web" src={web} alt="web" />
            </ImageSkill>




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
    flex-basis: 22rem;
    .icon {
        display: flex;
        align-items: center;
        margin: 4rem;
        
    }

    h3 {
        background: #fff;
        color: #000;
        margin-left: 1rem;
        padding: 1rem;
    }
`;





export default ServicesSection










