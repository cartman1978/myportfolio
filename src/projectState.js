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
                    title: "Super mario Evolution",
                    description:
                        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
                },
                {
                    title: "Different way to see Netflix.",
                    description:
                        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
                },
                {
                    title: "Build with HTML, CSS and Bootstrap",
                    description:
                        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
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
                    title: "App that shows the best tours in Ireland",
                    description:
                        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
                },
                {
                    title: "Build using Node.js and MongoBd",
                    description:
                        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
                },
                {
                    title: "Full stack application.",
                    description:
                        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
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