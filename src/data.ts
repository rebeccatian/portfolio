interface cardTypes {
    category: string[]
    title: string;
    image2: string
    subtitle: string;
    description: string;
    link: string;
}

export const cards: cardTypes[] = [
    {
        category:["frontend", "backend"], 
        title: "Ticket Tracker",  
        image2: "url", 
        subtitle: "Next.js, React, TypeScript, Tailwind, Prisma, PostgresSQL", 
        description: "IN PROGRESS / Current version: an user can check the lowest prices from SeatGeek for any artist they input. Still working on adding database to store user data.", 
        link:"https://ticket-tracker-rouge.vercel.app/"
    },
    {
        category:["frontend"], title: "Note App", image2: "url", 
        subtitle: "React.js, HTML/CSS, JavaScript", 
        description: "Jan 2022 / A simple Note App with abilites to create, add, edit, and delete.", link:"https://rebeccatian.github.io/my-app/"
    },
    {
        category:["frontend"], title: "Mini Games",  image2: "url", subtitle: "JavaScript, HTML/CSS", 
        description: "Jan 2022 - May 2023 / A collection of minigames built purely on vanilla JavaScript ", link:"url"
    },
    {
        category:["mobile"], title: "Anti-Boredom App", image2: "url",subtitle: "Swift", 
        description: "Nov 2022 / Mobile app that allows you ultilizes API calls to randomly generate the user an activity to do", link:"https://github.com/rebeccatian/anti-boredom-app"},
    {
        category:["mobile", "backend"], title: "Bite Butler", image2: "url", subtitle: "React Native, Python, Firebase", 
        description: "Hackathon 2023 Project / Mobile app that combines various restaurant ratings into one average rating and rank them accordingly", link:"url"},
    {
        category:["backend"], title: "Flappy Bird", image2: "url", subtitle: "Java, Java Swing", 
        description: "Dec 2021 / Java Swing desktop remake of the game Flappy Bird", link:"url"
    }
]