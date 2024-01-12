import React from "react";

const About = () => {
    const logos = [
        { src: "/images/js-logo.png", link: "https://www.javascript.com/" },
        { src: "/images/laravel.png", link: "https://laravel.com/" },
        { src: "/images/nodejs-logo.png", link: "https://nodejs.org/en/" },
        { src: "/images/react-logo.png", link: "https://react.dev/" },
        { src: "/images/tailwind-logo.png", link: "https://tailwindcss.com/" },
    ];

    return (
        <div id="about" className="about-container min-w-full md:w-full sm:w-full min-h-screen flex items-center bg-cyan-100">
            <div className="mx-auto text-center w-full px-4">

                <div className="text-black text-4xl md:text-5xl font-bold font-sans mb-10 mt-20">
                    Glad to see you here!
                </div>

                <div className="w-full lg:w-18 lg:text-sm max-w-[949px] lg:text-justify mb-10 mx-auto">
                    <span className="text-black text-xl font-semibold font-sans">
                        Hello! My name is <span className="text-violet-800 text-xl font-semibold font-sans">Ratna Amalia</span>.
                        I am a second-year university student studying Business Management and IT. Outside of my academic hours, I dedicate time to enhancing my skills in
                    </span>
                    <span className="text-violet-800 text-xl font-semibold font-sans"> web and mobile app development.</span>
                    <span className="text-black text-xl font-semibold font-sans">
                        In web development, I lean more towards the frontend and familiar with the backend. Currently, I am looking for hands-on experience and actively engaging in collaborative projects related to website development. If anyone is interested in learning together,
                    </span>
                    <span className="text-violet-800 text-xl font-semibold font-sans"> feel free to contact me</span>
                    <span role="img" aria-label="Wave">🙋‍♀️</span>
                </div>

                <div className="text-black text-4xl font-bold font-sans mt-20 mb-10">Language & Tools</div>

                <div className="w-full max-w-[714px] mx-auto flex flex-wrap gap-4 justify-center items-center">
                    {logos.map((logo, index) => (
                        <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer" className="w-[90px] h-[90px] px-3 pt-7 pb-[29px] bg-white rounded-[60px] shadow-lg justify-center items-center inline-flex transition-transform transform hover:scale-110">
                            <img className="w-12 h-auto" src={logo.src} alt={`Logo ${index + 1}`} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
