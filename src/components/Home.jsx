/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import React, { useState, useEffect } from "react";
import Typed from "react-typed";
// import Typewriter from "typewriter-effect";
// import { useSpring, animated } from "react-spring";

const Home = () => {
    const socialMediaIcons = [
        { src: "images/github-logo.png", alt: "Github", link: "https://github.com/amaliartnaa"},
        { src: "images/instagram-logo.svg", alt: "Instagram", link: "https://instagram.com/amaliartnaa"},
        { src: "images/linkedin-logo.svg", alt: "Linkedin", link: "https://linkedin.com/in/amaliartnaa"}
    ]
    // const saturnProps = useSpring({
    //     loop: true,
    //     from: { transform: "translateY(0)"},
    //     to: [
    //         { transform: "translateY(-20px)" },
    //         { transform: "translateY(-10px)" },
    //         { transform: "translateY(-20px)" },
    //     ]
    // });

    // const rocketProps = useSpring({
    //     loop: true,
    //     from: { transform: "translateY(0) rotate(-110deg)"},
    //     to: [
    //         { transform: "translateY(-10px) rotate(-110deg)" },
    //         { transform: "translateY(-20px) rotate(-110deg)" },
    //         { transform: "translateY(-10px) rotate(-110deg)" },
    //     ]
    // });

    // const waveHandProps = useSpring({
    //     reset: true,
    //     reverse: true,
    //     from: { transform: "rotate(0deg)"},
    //     to: async (next) => {
    //         while (true) {
    //             await next({ transform: "rotate(14deg)" });
    //             await next({ transform: "rotate(-8deg)" });
    //             await next({ transform: "rotate(14deg)" });
    //             await next({ transform: "rotate(-4deg)" });
    //         }
    //     }
    // });

    return (
        <div id="home" className="home-container">
            <div className="min-w-full sm:w-full md:w-full h-[852px] md:h-[700px] relative bg-cyan-100 overflow-x-hidden overflow-y-hidden">
            
            {/* Intro */}
            <div className="flex justify-center items-center min-h-screen flex-col text-center">
                    <div className="relative text-black text-[40px] md:text-[70px] font-bold font-sans mb-4">
                        Hi👋, I’m Amel
                    </div>
                    <div className="relative text-violet-800 text-xl md:text-3xl font-bold font-sans mb-10">
                        <Typed
                            strings={[
                                "I'm an Information Systems student",
                                "I'm a Junior Web Developer",
                                "I'm a learner and love games"
                            ]}
                            typeSpeed={80}
                            backSpeed={80}
                            loop
                        />
                    </div>

                {/* Sosmed */}
                <div className="flex justify-center mb-10 gap-6">
                        {socialMediaIcons.map((icon, index) => (
                            <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
                                <div className="w-[70px] h-[70px] p-[15px] bg-white rounded-[60px] shadow-lg justify-center items-center inline-flex transition-transform transform hover:scale-110 mx-2">
                                    <img className="w-10 h-10" src={icon.src} alt={icon.alt} />
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
