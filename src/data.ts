import { StaticImageData } from 'next/image';
import gamePic from '../public/games.png'
import notePic from '../public/noteApp.png'
import portPic from '../public/portfolio.png'
import boredomAppPic from '../public/boredomApp.png';
import biteButler from '../public/biteButler.png'
import flappyBird from '../public/flappyBird.png'
import excelPic from '../public/excelPic.png'
import { Url } from 'next/dist/shared/lib/router/router';
export interface CardTypes {
    category: string[]
    title: string;
    image2: StaticImageData
    subtitle: string;
    description: string;
    demoLink?: string;
    descriptionLink?: string;
    githubLink: string;
}

export const cards: CardTypes[] = [
    {
        category:["data"], title: "Bike Store Dashboard", subtitle: "SQL, Excel",
        image2: excelPic,
        description: "Jan 2025 / Used SQL queries to analyze data from several databases for bike stores and create an interactive dashboard in Excel.", 
        githubLink: "https://github.com/rebeccatian/bike-store-sql",
        descriptionLink: "/bike-store"
    },
    {
        category:["frontend"], title: "Mini Games", image2: gamePic, subtitle: "JavaScript, HTML/CSS", 
        description: "Jan 2022 / A collection of minigames built purely with vanilla JavaScript ", 
        demoLink:"https://rebeccatian.github.io/mini-games",
        githubLink:"https://github.com/rebeccatian/mini-games"
    },
    {
        category:["frontend"], title: "Note App", image2: notePic, 
        subtitle: "React, Redux, JavaScript, HTML/CSS", 
        description: "Jan 2022 / A simple Note App made with Redux Toolkit that can create, add, edit, and delete.", demoLink:"https://rebeccatian.github.io/note-app/",
        githubLink: "https://github.com/rebeccatian/note-app"
    },
    {
        category:["frontend"], title: "Portfolio (this site!)", image2: portPic, subtitle: "React, TypeScript, Tailwind",
        description: "September 2023 / New portfolio site made to host projects and act as an introduction to me", demoLink:"https://rebeccatian.dev",
        githubLink: "https://github.com/rebeccatian/portfolio"
    },
    {
        category:["mobile"], title: "Anti-Boredom App", image2: boredomAppPic, subtitle: "Swift", 
        description: "Nov 2022 / Mobile app that ultilizes API calls to randomly generate an activity for the user", githubLink:"https://github.com/rebeccatian/anti-boredom-app"
    },
    {
        category:["mobile", "backend"], title: "Bite Butler", image2: biteButler, subtitle: "React Native, Python, Firebase", 
        description: "Hackathon 2023 Project / Mobile app that combines various restaurant ratings into one average rating and rank them accordingly", githubLink:"https://github.com/rebeccatian/bite-butler"},
    {
        category:["backend"], title: "Flappy Bird", image2: flappyBird, subtitle: "Java, Java Swing", 
        description: "Dec 2021 / Desktop app remake of the game Flappy Bird with Java Swing", githubLink:"https://github.com/rebeccatian/Flappy-Bird"
    }
]