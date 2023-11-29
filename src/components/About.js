import React from "react";

const About = () => {
    const logos = [
        { src: "/images/js-logo.png", link: "https://www.javascript.com/"},
        { src: "/images/laravel.png", link: "https://laravel.com/"},
        { src: "/images/nodejs-logo.png", link: "https://nodejs.org/en/"},
        { src: "/images/react-logo.png", link: "https://react.dev/"},
        { src: "/images/tailwind-logo.png", link: "https://tailwindcss.com/"},
    ];

    return (
        <div className="about-container w-full min-h-screen flex items-center bg-cyan-100">
            <div className="mx-auto text-center">
                <div className="text-black text-5xl font-bold font-sans mb-10">
                Glad to see you here!
                </div>

                <div className="w-[949px] text-justify mb-10">
                    <span className="text-black text-xl font-semibold font-sans">
                        Hello! My name is <span className="text-violet-800 text-xl font-semibold font-sans">Ratna Amalia</span>
                        . I am a second-year university student who is studying Business Management and IT. Outside of my academic hours, I dedicate time to enhancing my skills in
                    </span>
                    <span className="text-violet-800 text-xl font-semibold font-sans "> web and mobile app development. </span>
                    <span className="text-black text-xl font-semibold font-sans">
                    In web development, I lean more towards the frontend and familiar with the backend. Currently, I am looking for hands-on experience and actively engaging in collaborative projects related to website development. If anyone is interested in learning together,
                    </span>
                    <span className="text-violet-800 text-xl font-semibold font-sans"> feel free to contact me</span>
                    <span className="text-black text-xl font-semibold font-sans">🙋‍♀️</span>
                </div>

                <div className="text-black text-4xl font-bold font-sans mt-20 mb-10">Language & Tools</div>

                <div className="w-[714px] mx-auto mt-8 flex justify-between">
                    {logos.map((logo, index) => (
                        <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer" className="w-[110px] h-[110px] px-3 pt-7 pb-[29px] bg-white rounded-[60px] shadow-lg justify-center items-center inline-flex transition-transform transform hover:scale-110">
                            <img className="w-16 h-auto" src={logo.src} alt={`Logo ${index + 1}`}/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;