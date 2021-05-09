import mario from "./img/mario.jpg";
import sport from "./img/sport.png";
import tour from "./img/tour.png";
import videogame from "./img/videogame.jpg";

export const projectState = () => {
    return [
        {
            title: "Super Mario",
            mainImg: mario,
            secondaryImg: mario,
            url: "/projects/supermario",
            awards: [
                {
                    title: "Website Design",
                    description:
                        "I was responsible for both the design and the development of the Super Mario Evolution website. The website was built using a custom CSS to recall the videogame experince for the user.",
                },
                {
                    title: "Responsive Layout",
                    description:
                        "From the very start, the Super Mario Evolution website was designed and developed to be fully responsive. A responsive layout allows the website to resize appropriately across a wide range of devices including desktop computers, laptops, tablets (e.g. iPad) and smartphones.",
                },
                {
                    title: "Super mario Evolution ",
                    description:
                        "This website was build as a part of my Milestone project at Codeinstitute, the main idea was to provide a brief story about Super Mario and how the game evolved in 30 years.",
                },
            ],
        },
        {
            title: "The Hiking Tour",
            mainImg: tour,
            url: "/projects/tour",
            secondaryImg: tour,
            awards: [
                {
                    title: "Full stack application",
                    description:
                        "Worked on both the front-end and back-end of the website, this project involve database and building user-facing webiste.",
                },
                {
                    title: " Node.js and MongoBd",
                    description:
                        "Build using modern technologies: node.js, express, mongoose, mongoDB ",
                },
                {
                    title: "App that shows the best tours in Ireland",
                    description:
                        "This website is for people that loves Hiking and they want to discover tours available in Ireland with all the information including distance, rating and price.",
                },
            ],

        },
        {
            title: "World Sport News",
            mainImg: sport,
            url: "/projects/sport-news",
            secondaryImg: sport,
            awards: [
                {
                    title: "Fetching data from newsorg.com API",
                    description:
                        "I build this website using Fetch API, a modern interface that allows you to make HTTP requests to servers from web browsers.",
                },
                {
                    title: "Html, Css and Javascript.",
                    description:
                        "With HTML I provided the basic structure of the site and I used CSS to control presentation, formatting anf layout. JavaScript is used to control the behavior of different elements.",
                },
                {
                    title: "Sport news ",
                    description:
                        "This website is build for soccer fans around the world as it contains sport news from 8 different Countrys",
                },
            ],
        },
        {
            title: "Video Game Quizzes",
            mainImg: videogame,
            url: "/projects/videogame",
            secondaryImg: videogame,
            awards: [
                {
                    title: "Quiz Game",
                    description:
                        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
                },
                {
                    title: "Fetching Data from Trivia API",
                    description:
                        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
                },
                {
                    title: "Build with vanilla Javascript",
                    description:
                        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
                },
            ],

        },
    ];
};