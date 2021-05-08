import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";


// Import Images
import webdesign from '../img/webdesign.png';
import backend from '../img/backend.png';
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
import github from '../img/github.png';
import npm from '../img/npm.png';
import visual from '../img/visual.png';
import heroku from '../img/heroku.png';
import laptop from '../img/laptop.png';




// Styles
import { About, Description } from "../styles";
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



                <Grid container spacing={1}>
                    <Grid item xs={12} sm={4}>
                        <div className="icon">
                            <img src={webdesign} alt="frontend" />
                            <h3> Frontend</h3>
                        </div>
                        <Box boxShadow={3} height="80%" bgcolor="#fff" color="primary.contrastText" p={2}>
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
                                        ></Typography>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <img src={css} alt="frontend" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="CSS"
                                    secondary={
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        ></Typography>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <img src={reactImg} alt="frontend" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="React.js"
                                    secondary={
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        ></Typography>
                                    }
                                />
                            </ListItem>

                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <img src={sass} alt="frontend" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Sass"
                                    secondary={
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        ></Typography>
                                    }
                                />
                            </ListItem>

                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <img src={js} alt="frontend" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Javascript"
                                    secondary={
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        ></Typography>
                                    }
                                />
                            </ListItem>

                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <img src={bootstrap} alt="frontend" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Bootstrap"
                                    secondary={
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        ></Typography>
                                    }
                                />
                            </ListItem>

                        </Box>
                    </Grid>



                    <Grid item xs={12} sm={4}>
                        <div className="icon">
                            <img src={backend} alt="frontend" />
                            <h3> Backend</h3>
                        </div>
                        <Box boxShadow={3} height="80%" bgcolor="#fff" color="info.main" p={2}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <img src={python} alt="frontend" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Python"
                                    secondary={
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        ></Typography>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start">
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
                                        ></Typography>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <img src={nodejs} alt="nodejs" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Node.js"
                                    secondary={
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        ></Typography>
                                    }
                                />
                            </ListItem>

                            <ListItem alignItems="flex-start">
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
                                        ></Typography>
                                    }
                                />
                            </ListItem>

                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <img src={mongodb} alt="mysql" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="MongoDb"
                                    secondary={
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        ></Typography>
                                    }
                                />
                            </ListItem>

                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={4}>
                        <div className="icon">
                            <img src={laptop} alt="other" />
                            <h3> Other</h3>
                        </div>
                        <Box boxShadow={3} height="80%" bgcolor="#fff" color="error.contrastText" p={2}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <img src={github} alt="github" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="GitHub"
                                    secondary={
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        ></Typography>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <img src={npm} alt="npm" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="npm"
                                    secondary={
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        ></Typography>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <img src={visual} alt="vscode" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Vs-Code"
                                    secondary={
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        ></Typography>
                                    }
                                />
                            </ListItem>

                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <img src={heroku} alt="heroku" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Heroku"
                                    secondary={
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        ></Typography>
                                    }
                                />
                            </ListItem>

                        </Box>
                    </Grid>
                </Grid>


            </Description>





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




export default ServicesSection










