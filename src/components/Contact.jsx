import React from 'react';
import { FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    const socialMediaLinks = [
        { icon: <FaLinkedin />, link: 'https://linkedin.com/in/amaliartnaa' },
        { icon: <FaEnvelope />, link: 'mailto:amaliaratna41@gmail.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com/amaliartnaa' },
    ];

    return (
        <div id="contact" className="w-full min-h-screen flex flex-col items-center justify-center bg-cyan-100">
            <div className="text-center mb-6">
                <h3 className="text-black text-3xl md:text-5xl font-bold font-sans">Contact me at here</h3>
            </div>

            <div className="flex gap-4 mt-4">
                {socialMediaLinks.map((item, index) => (
                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="text-white bg-violet-500 hover:bg-violet-600 rounded-full p-3 transition duration-300">
                        {item.icon}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Contact;