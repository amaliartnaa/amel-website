import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="min-w-full md:w-full h-20 bg-purple flex items-center justify-between shadow-2xl fixed top-0 left-0 z-10">
            <div className="ml-16">
                <div className="text-white text-4xl md:text-5xl m-4 font-normal font-kanit">RA</div>
            </div>
            <div className="mr-6 md:mr-16">
                <div className="hidden md:flex space-x-8">
                    <a href="#home" className="text-white text-xl font-normal font-sans">Home</a>
                    <a href="#about" className="text-white text-xl font-normal font-sans">About</a>
                    <a href="#projects" className="text-white text-xl font-normal font-sans">Projects</a>
                    <a href="#contact" className="text-white text-xl font-normal font-sans">Contact</a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white text-xl">
                        {isMenuOpen ? "Close" : "Menu"}
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden fixed top-20 left-0 w-full h-screen bg-purple text-white text-center">
                        <ul className="flex flex-col items-center space-y-8 mt-16">
                            <li>
                                <a href="#home" onClick={toggleMenu} className="text-xl font-normal font-sans">Home</a>
                            </li>
                            <li>
                                <a href="#about" onClick={toggleMenu} className="text-xl font-normal font-sans">About</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={toggleMenu} className="text-xl font-normal font-sans">Projects</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={toggleMenu} className="text-xl font-normal font-sans">Contact</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
