import { kayros, whitecape,polymerengineering } from "../assets/images";

import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    linkedin,
   
    car,
    estate,
    pricewise,
    snapgram,
    summiz,
    threads,
    
    contact,
    
    nestjs,
    solidity,
    firebase,
    php,
    mysql,
    postgresql,
    pma,
    figma
    
} from "../assets/icons";
//simply add or remove skills | projects add them to the assets folder and import 

export const skills = [
    {
        imageUrl: nestjs,
        name: "nestjs",
        type: "Back-End",
    },
    {
        imageUrl: solidity,
        name: "solidity",
        type: "Blockchain",
    },
    {
        imageUrl: firebase,
        name: "firebase",
        type: "Developer Tools",
    },
    {
        imageUrl: php,
        name: "php",
        type: "Web Technologies",
    },
    {
        imageUrl: mysql,
        name: "mysql",
        type: "Databases",
    },
    {
        imageUrl: postgresql,
        name: "postgresql",
        type: "Databases",
    },
    {
        imageUrl: pma,
        name: "PhpMyAdmin",
        type: "Developer Tools",
    },
    {
        imageUrl: figma,
        name: "figma",
        type: "Developer Tools",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Web Technologies",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Developer Tools",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Developer Tools",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Web Technologies",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Web Technologies",
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
        iconBg: "  #A0c9ff ",
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
        icon: whitecape,
        iconBg: "rgba(255,255,255,0.7)",
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
        icon: polymerengineering,
        iconBg: "rgba(0,0,0,0.7)",
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
        iconUrl: kayros,
        theme: 'btn-back-pink',
        name: 'Kayros Wallet',
        description: 'Designed and developed the Kayros Wallet, a versatile injected wallet that supports over 41 languages. Implemented comprehensive protocol support, allowing users to interact seamlessly with various blockchain networks. Created a Web3 gateway tailored for gamers, providing access to play-to-earn games and educational courses within the Kayros Academy. Empowered users to send, receive, and manage cryptocurrencies with user-friendly functionality',
        link: 'https://www.kayros.world/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-green',
        name: 'SmartCity Information Integration Platform',
        description: 'Developed a bilingual (French and Arabic) cross-platform application that facilitates seamless transmission of information, proposals, and requests to an integrated ERP system (ODOO). Implemented robust user authentication, email verification for registration, and password change functionality to ensure data security. Empowered users with access to up-to-date municipal news, proposals, vital information, and efficient channels for submitting    reclamations.',
        link: 'https://www.ihpolymerengineering.com/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Utility Meter Management App (UMMA)',
        description: 'Architected and developed the Utility Meter Management App (UMMA) to facilitate user access to GAZ, ELECTRIC, and    WATER meters sourced from the ODOO ERP system. Incorporated cutting-edge OCR technology for seamless meter reading and real-time updates to the ERP system, streamlining    utility management. Implemented robust security measures, including secure sign-in and password change functionality, to enhance user account  management and data protection.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: car,
        theme: 'btn-back-pink',
        name: 'Decentralized Voting System (NearVote)',
        description: 'Conceptualized and engineered the NearVote platform, a decentralized voting system that empowers administrators to create and manage VoteRooms, VoteParties, and Voters.Integrated invitation emails, user account configurations, and secure voting through Near Protocol wallets, ensuring a transparent and secure voting process.Enabled voters to securely participate and access real-time party results, enhancing the democratic voting experience.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: polymerengineering,
        theme: 'btn-back-black',
        name: 'IH Polymer Engineering Showcase Website',
        description: 'Crafted a static showcase website for IH Polymer Engineering, serving as an informative platform to showcase the company’s  extensive expertise in polymer research, product development, and engineering solutions.Designed a modern and concise online presence that conveys professionalism and a steadfast commitment to delivering high-quality polymer engineering solutions.',
        link: 'https://www.ihpolymerengineering.com/',
    }
];