import mario from "./img/mario.jpg";
import sport from "./img/sport.png";
import tour from "./img/tour.png";
import videogame from "./img/videogame.jpg";

export const projectState = () => {
    return [
        {
            title: "The Movie app",
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
            url: "/work/tour",
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
            url: "/work/sport-news",
            secondaryImg: sport,
            awards: [
                {
                    title: "Fetching data from newsorg.com",
                    description:
                        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
                },
                {
                    title: "Html, Css and Javascript.",
                    description:
                        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
                },
                {
                    title: "Sport news from 8 different countrys.",
                    description:
                        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
                },
            ],
        },
        {
            title: "Video Game Quizzes",
            mainImg: videogame,
            url: "/work/tour",
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