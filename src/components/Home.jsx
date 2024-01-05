/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import React, { useState, useEffect } from "react";
import Typed from "react-typed";
// import Typewriter from "typewriter-effect";
import { useSpring, animated } from "react-spring";

const Home = () => {
    const socialMediaIcons = [
        { src: "images/github-logo.png", alt: "Github", link: "https://github.com/amaliartnaa"},
        { src: "images/instagram-logo.svg", alt: "Instagram", link: "https://instagram.com/amaliartnaa"},
        { src: "images/linkedin-logo.svg", alt: "Linkedin", link: "https://linkedin.com/in/amaliartnaa"}
    ]
    const saturnProps = useSpring({
        loop: true,
        from: { transform: "translateY(0)"},
        to: [
            { transform: "translateY(-20px)" },
            { transform: "translateY(-10px)" },
            { transform: "translateY(-20px)" },
        ]
    });

    const rocketProps = useSpring({
        loop: true,
        from: { transform: "translateY(0) rotate(-110deg)"},
        to: [
            { transform: "translateY(-10px) rotate(-110deg)" },
            { transform: "translateY(-20px) rotate(-110deg)" },
            { transform: "translateY(-10px) rotate(-110deg)" },
        ]
    });

    const waveHandProps = useSpring({
        reset: true,
        reverse: true,
        from: { transform: "rotate(0deg)"},
        to: async (next) => {
            while (true) {
                await next({ transform: "rotate(14deg)" });
                await next({ transform: "rotate(-8deg)" });
                await next({ transform: "rotate(14deg)" });
                await next({ transform: "rotate(-4deg)" });
            }
        }
    });

    return (
        <div id="home" className="home-container">
            <div className="min-w-full sm:w-full md:w-full h-[852px] md:h-[700px] relative bg-cyan-100 overflow-x-hidden overflow-y-hidden">
            
            {/* Navbar */}
            <nav className=" min-w-full md:w-full h-20 bg-purple flex items-center justify-between shadow-2xl fixed top-0 left-0 z-10">
                <div className="ml-16">
                    <div className="text-white text-4xl md:text-5xl m-4 font-normal font-kanit">RA</div>
                </div>
                <div className="mr-16">
                    <ul className="flex space-x-8">
                        <li>
                            <a href="#home" className="text-white 
                            text-xl font-normal font-sans">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="text-white text-xl font-normal font-sans">About</a>
                        </li>
                        <li>
                            <a href="#projects" className="text-white text-xl font-normal font-sans">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="text-white text-xl font-normal font-sans">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Intro */}
            <div className="grid md:grid-rows-3">
                <div className="left-32 top-52 relative mt-4 mb-8">
                    <div className="left-0 top-0 relative text-black text-[40px] md:text-[70px] font-bold font-sans">
                        Hi<animated.span style={waveHandProps}>👋</animated.span>, I’m Amel
                    </div>
                    <div className="left-0 top-6 relative text-violet-800 text-xl md:text-3xl font-bold font-sans">
                        <Typed
                            strings={[ 
                                "I'm an Information Systems student",
                                "I'm a Junior Web Developer",
                                "I'm a learner and love game"
                            ]}
                            typeSpeed={80}
                            backSpeed={80}
                            loop
                        />
                    </div>
                </div>

                {/* Photo */}
                <div className="w-[468px] h-[150px] rounded-[700px] relative mx-auto mr-20 bottom-6">
                    <img className="w-[281px] md:w-[468px] h-[294px] md:h-[460px] left-[308px] top-[28px] sm:justify-center items-center rounded-[700px]" src="images/fotoku.png" alt="Amel's Photo"/>

                    <animated.img style={rocketProps} className="w-[200px] h-18 absolute left-80 -top-1" src="images/rocket.png" alt="Rocket"/>
                    <animated.img style={saturnProps} className="w-[175px] h-18 absolute top-72 -left-10" src="images/saturn.png" alt="Saturn"/>
                </div> 

                {/* Sosmed */}
                <div className="w-[282px] h-[70px] m-32 flex justify-between mb-10">
                    {socialMediaIcons.map((icon, index) => (
                        <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
                            <div className="w-[70px] h-[70px] p-[15px] bg-white rounded-[60px] shadow-lg justify-center items-center inline-flex transition-transform transform hover:scale-110">
                                <img className="w-10 h-10" src={icon.src} alt={icon.alt}/>
                            </div>
                        </a>
                    ))}
                </div>
            </div>   
        </div>
    </div>
    )
}



export default Home;
