import { StaticImageData } from 'next/image';
import seatGeekPic from '../public/seatgeek.png';
import gamePic from '../public/games.png'
import notePic from '../public/noteApp.png'
import portPic from '../public/portfolio.png'
import boredomAppPic from '../public/boredomApp.png';
import biteButler from '../public/biteButler.png'
import flappyBird from '../public/flappyBird.png'
export interface CardTypes {
    category: string[]
    title: string;
    image2: StaticImageData
    subtitle: string;
    description: string;
    link?: string;
    githubLink: string;
}

export const cards: CardTypes[] = [
    {
        category:["frontend", "backend"], 
        title: "Ticket Tracker",  
        image2: seatGeekPic, 
        subtitle: "Next.js, React, TypeScript, Tailwind, Prisma, PostgresSQL", 
        description: "IN PROGRESS / Current version: can check lowest price, save events to your email, and check your saved events through email. Still working on adding email notifications.", 
        link:"http://ticket-tracker.rebeccatian.dev/",
        githubLink:"https://github.com/rebeccatian/ticket-tracker"
    },
    {
        category:["frontend"], title: "Note App", image2: notePic, 
        subtitle: "React, Redux, JavaScript, HTML/CSS", 
        description: "Jan 2022 / A simple Note App made with Redux Toolkit that can create, add, edit, and delete.", link:"https://rebeccatian.github.io/note-app/",
        githubLink: "https://github.com/rebeccatian/note-app"
    },
    {
        category:["frontend"], title: "Mini Games", image2: gamePic, subtitle: "JavaScript, HTML/CSS", 
        description: "Jan 2022 - Now / A collection of minigames built purely with vanilla JavaScript ", 
        link:"https://rebeccatian.github.io/mini-games",
        githubLink:"https://github.com/rebeccatian/mini-games"
    },
    {
        category:["frontend"], title: "Portfolio (this site!)", image2: portPic, subtitle: "React, TypeScript, Tailwind",
        description: "September 2023 / New portfolio site made to host projects and act as an introduction to me", link:"https://rebeccatian.dev",
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