import React, { useEffect } from "react";

const ProjectCard = ({ imageSrc, title, description, githubLink, demoLink }) => {
    return (
        <div className="project-card relative w-96 md:w-96 h-72 m-2 mb-60 space-x-10 justify-center items-center grid lg:grid-rows-2">
            <div className="project-details p-6 bg-white border border-white rounded-2xl flex flex-col justify-between items-center lg:mt-60 sm:flex-row-2 space-y-5">
                <div className="project-image-container">
                    <img className="w-full h-42 md:h-170 rounded-2xl mb-7" src={imageSrc} alt={title} />
                </div>
                <h3 className="text-xl md:text-3xl font-bold font-sans">{title}</h3>
                <p className="text-[10px] md:text-base font-medium text-center text-black mt-5">{description}</p>
                <div className="project-actions mt-6 flex flex-col md:flex-row gap-3">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="code-button w-36 sm:w-36 md:w-36 h-10 bg-green-300 rounded-xl flex items-center justify-center">
                        <span className="text-base md:text-xl font-semibold font-sans">Code</span>
                    </a>
                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="code-button w-full sm:w-36 md:w-36 h-10 bg-violet-300 rounded-xl flex items-center justify-center mt-2 md:mt-0">
                        <span className="text-base md:text-xl font-semibold font-sans">Demo</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

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
            imageSrc: "images/project2.png",
            title: "Antasena E-learning",
            description: "As an intern web developer at Antasena ITS, I and with my partner make an e-learning website as our Final Project. This web use tailwind, laravel, alpine.js",
            githubLink: "",
            demoLink: "https://e-learning.antasenaits.com/",
        }
    ];

    return (
        <div id="projects" className="projects-container w-full min-h-screen flex flex-col items-center bg-cyan-100">
            <h1 className="text-black text-3xl md:text-5xl font-bold font-sans mb-20 md:mb-16 mt-20 md:mt-40">My Projects</h1>
            <div className="mx-auto text-center grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 lg:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} className="mb-6 md:mb-0" />
                ))}
            </div>
        </div>
    );
};

export default Projects;
