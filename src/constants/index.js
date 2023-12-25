import { meta, shopify, starbucks, tesla, kayros } from "../assets/images";

import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";
//simply add or remove skills | projects add them to the assets folder and import 

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Blockchain Developer",
        company_name: "Kayros",
        icon: kayros,
        iconBg: "#accbe1",
        date: "Mars 2023 – Present",
        points: [
            "In my role at Kayros, I made significant contributions to various key projects, showcasing my expertise and dedication as a developer.",
            "I took on the responsibility of monitoring the Kayros Wallet app, ensuring its smooth operation and addressing any issues promptly. Furthermore, I designed and implemented unit tests to rigorously evaluate the communication between different protocols within the application.",
            "In addition to technical contributions, I made a meaningful impact by adding support for 41 different languages to the Kayros Wallet. This multilingual capability not only expanded the user base but also demonstrated my versatility in addressing diverse user needs.",
            "My versatility extended to front-end development as well. I actively contributed to improving the user interface and overall user experience .Notably, I contributed to the implementation of the Wallet Connect service, ensuring seamlessconnectivity with external wallets. Additionally, I integrated Kayros into the Wallet Connect Explorer, enabling users to connect to decentralized applications (DApps) using Kayros, further expanding our ecosystem’s utility.",
        ],
    },
    {
        title: "Web and Mobile Developer",
        company_name: "WhiteCape Technologies",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "August 2022 – Septembre 2023",
        points: [
            "I had the privilege of working at Whitecape for a total duration of 1 year and 8 months, comprising 6 months as an intern followed by 1 year and 2 months as a full-time employee, starting in February.",
            "During my time at Whitecape, I actively honed my skills as a web and mobile developer. I capitalized on the  opportunity to work on various projects, contributing to the development of two mobile applications. My contributions  were pivotal in the successful supervision of three final study projects for engineering students, all of whom graduated with honors under my guidance.",
           
            "My tenure at Whitecape not only allowed me to grow professionally but also provided me with the gratification of mentoring and supporting emerging talents in the field. It was a period of dynamic growth and achievement, both for myself and the teams I collaborated with.",
        ],
    },
    {
        title: "SEO Specialist",
        company_name: "IH Polymer Enginnering",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "December 2020 – Juin 2021",
        points: [
            "During my first year of university, I embarked on my internship journey with IH Polymer Engineering, where I had the opportunity to showcase my web development skills. I initially created and hosted their static website, and my work was well-received.",
            "What started as an internship soon evolved into a part-time job. IH Polymer Engineering was highly impressed with my work and proposed that I take on additional responsibilities, including optimizing the website for search engines (SEO) and developing new features. This transition marked a significant milestone in my career.",
         
            "I was deeply committed to delivering results, and as a part-time web developer, I dedicated three hours every day, including weekends, to ensure the website’s continuous improvement. My primary focus was on identifying strategies, techniques, and tactics to increase website traffic and secure high-ranking placements in search engine results. The targeted keywords for SEO included ”IH POLYMER,” ”IH POLYMER ENGINEERING,” and ”IH ENGINEERING.” My experience at IH Polymer Engineering not only allowed me to apply my skills in a real-world setting but also demonstrated my dedication and adaptability in taking on additional responsibilities as they arose.",
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];