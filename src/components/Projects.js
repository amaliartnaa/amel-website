import React, { useEffect } from "react";

const ProjectCard = ({ imageSrc, title, description, githubLink, demoLink }) => {
    return (
        <div className="project-card relative w-full md:w-96 h-429 mb-8 md:mb-0">
            
            <div className="project-image-container ">
                <img className="w-full h-170 rounded-t-2xl" src={imageSrc} alt="{title" />
            </div>
            <div className="project-details p-6 bg-white border border-white rounded-b-2xl flex flex-col justify-start items-start">
                <h3 className="text-3xl font-bold font-sans">{title}</h3>
                <p className="text-[10px] font-medium text-justify text-black mt-5">{description}</p>
                <div className="project-actions mt-6 flex gap-3">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="code-button w-40 h-10 bg-green-300 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-semibold font-sans">Code</span>
                    </a>
                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="code-button w-40 h-10 bg-violet-800 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-semibold font-sans">Demo</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const projects = [
        {
            imageSrc: "images/project1.png",
            title: "Company Website",
            description: "I made a company web, especially FnB. I made Fore Coffee’s web as my idea and sliced it with Bootstrap. Additionally, there is a little bit of JavaScript here for contact form validation.",
            githubLink: "https://github.com/amaliartnaa/amaliartnaa.github.io",
            demoLink: "https://amaliartnaa.github.io",
        },
        {
            imageSrc: "images/projects2.png",
            title: "Antasena Learning",
            description: "As an intern web developer at Antasena ITS Team, I got many knowledge and I implement them for the final project. I and with my partner make an e-learning website consist of subjects and exercise. I make exercise session. This web use tailwind, laravel, alpine.js",
            githubLink: "",
            demoLink: "https://e-learning.antasenaits.com/",
        }
    ]

    return (
        <div className="projects-container w-full min-h-screen flex flex-col items-center bg-cyan-100">
            <h1 className="text-black text-5xl font-bold font-sans mb-20 mt-40">My Projects</h1>
            <div className="mx-auto text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project}/>
                ))}
            </div>
        </div>
    )
    
}

export default Projects;

