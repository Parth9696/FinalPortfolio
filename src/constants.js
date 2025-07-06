// Skills section Logos
import springbootLogo from "./assets/tech_logo/springboot.jpg";
import nodejsLogo from "./assets/tech_logo/nodejs.jpg";
import mysqlLogo from "./assets/tech_logo/java.jpg";
import cppLogo from "./assets/tech_logo/C++.jpg";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import githubLogo from "./assets/tech_logo/github.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import angularLogo from "./assets/tech_logo/angular.png";
import cssLogo from "./assets/tech_logo/CSS.jpg";
import javascriptLogo from "./assets/tech_logo/Javascript.jpg";
import htmlLogo from "./assets/tech_logo/Html.jpg";
import reactjsLogo from "./assets/tech_logo/react.jpg";
import cLogo from "./assets/tech_logo/c.png";
import javaLogo from "./assets/tech_logo/java.jpg";
import pythonLogo from "./assets/tech_logo/python.jpg";

// Experience section logo
import damcoLogo from "./assets/company_logo/damcoLogo.jpg";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education section logo
import maryGardinerLogo from "./assets/education_logo/maryGardiner.jpg";
import smcicLogo from "./assets/education_logo/smcic.jpg";
import kiitLogo from "./assets/education_logo/kiit.jpg";

// Project Section logo
import movieRecLogo from "./assets/work_logo/movie_rec.png";
import bookingAppLogo from "./assets/work_logo/BookingApp.png";
import homeFixLogo from "./assets/work_logo/HomeFix.png";
import imageSearchLogo from "./assets/work_logo/image_search.png";
import githubdetLogo from "./assets/work_logo/github_det.png";

export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Angular', logo: angularLogo },
            { name: 'Next JS', logo: nextjsLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Springboot', logo: springbootLogo },
            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
            { name: 'MySQL', logo: mysqlLogo },
            { name: 'MongoDB', logo: mongodbLogo },
            { name: 'Firebase', logo: firebaseLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'Java', logo: javaLogo },
            { name: 'Python', logo: pythonLogo },
            { name: 'JavaScript', logo: javascriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Vercel', logo: vercelLogo },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: damcoLogo,
        role: "Software Developer Intern",
        company: "Damco Solutions",
        date: "August 2024 - Oct 2024",
        desc: "Developed an dynamic and scalable Insurance Policy System. It was designed to help insurers manage the lifecycle of insurance policies from issuance to renewal or cancellation. , integration, and deployment of high-quality features aligned with project requirements and deadlines.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Python",
            "Node JS",
            ".NET",
        ],
    },
    {
        id: 1,
        img: newtonschoolLogo,
        role: "Frontend Intern",
        company: "Newton School",
        date: "September 2021 - August 2022",
        desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
        skills: [
            "HTML",
            "CSS",
            "Javascript",
            "Bootstrap",
            "Figma",
            "Material UI",
            "SQL",
        ],
    },
];
export const education = [
    {
        id: 0,
        img: kiitLogo,
        school: "KIIT University, Bhubaneswar",
        date: "June 2021 - May 2025",
        grade: "7.81 CGPA",
        desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science from KIIT University, Bhubaneswar. During my time at KIIT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at KIIT University has been instrumental in shaping my technical abilities and professional growth.",
        degree: "Bachelor of Technology - B.Tech",
    },
    {
        id: 1,
        img: maryGardinerLogo,
        school: "Mary Gardiner School, Lucknow",
        date: "Mar 2019 - May 2020",
        grade: "80%",
        desc: "I completed my class 12 education from Mary Gardiner School, Lucknow, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Physical Education.",
        degree: "CBSE(XII) - PCM with Physical Education",
    },
    {
        id: 2,
        img: smcicLogo,
        school: "St. Mary's Convent Inter College, Lucknow",
        date: "Apr 2017 - March 2018",
        grade: "90%",
        desc: "I completed my class 10 education from St. Mary's Convent Inter College, Lucknow, under the ICSE board, where I studied all general subjects that are Science, History, Computers, Mathematics and Hindi.",
        degree: "ICSE(X) - All Subjects",
    },
];

export const projects = [
    {
        id: 0,
        title: "Movie Recommendation App",
        description:
            "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
        image: movieRecLogo,
        tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/Parth9696",
        webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
        id: 1,
        title: "Image Search App",
        description:
          "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
        image: imageSearchLogo,
        tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
        github: "https://github.com/Parth9696",
        webapp: "https://imagsearch.netlify.app/",
      },
      {
        id:2,
        title: "Raahi",
        description:
        "A React.js travel booking and planner app that allows users to search for places to visit and book tickets, hotels and many other things. Built using external APIs to ensure a vast library of results for various queries. "
        ,
        image: bookingAppLogo,
        tags: ["HTML","TailwindCSS","ReactJS","APIs","JavaScript"],
        github: "https://github.com/Parth9696",
        webapp: "https://mybooking-black.vercel.app/",
      },
      {
        id: 3,
        title: "GitHub Profile Detective",
        description:
          "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
        image: githubdetLogo,
        tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
        github: "https://github.com/Parth9696",
        webapp: "https://githubprofiledetective.netlify.app/",
      },
    {
        id: 4,
        title: "HomieFix",
        description:"HomieFix is a comprehensive home service platform that connects users with skilled professionals for various services, including plumbing, electrical work, and cleaning. The platform features a user-friendly interface, allowing users to easily book services, track their requests, and communicate with service providers.",
        image:homeFixLogo,
        tags: ["HTML","CSS","JavaScript","React","Node.js","Express.js","MongoDB"],
        github: "https://github.com/Parth9696",
        webapp:"https://homie-fix.vercel.app/",
    },
]