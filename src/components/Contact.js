import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {

    }

    return (
        <div className="w-full min-h-screen flex items-center bg-cyan-100">
            <div className="w-[800px] h-[600px] relative bg-white rounded-2xl shadow flex-col justify-start items-center inline-flex p-8 mx-auto mt-40">
                <div className="w-[541px] text-center text-black text-4xl font-bold font-sans">
                    Want to learn together? Contact me at here👇
                </div>
                <div className="w-[375px] h-[287px] relative mt-8">
                    <div className="form-input top-0 mx-auto absolute">
                        <label htmlFor="name" className="text-black text-xl font-normal font-sans">Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-[350px] h-[63px] rounded-2xl border-2 border-neutral-700 px-4"/>
                    </div>
                    <div className="form-input left-0 top-[114px] absolute">
                        <label htmlFor="email" className="text-black text-xl font-normal font-sans">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-[350px] h-[63px] rounded-2xl border-2 border-neutral-700 px-4"/>
                    </div>
                    <div className="form-input left-0 top-[228px] absolute">
                        <label htmlFor="phoneNumber" className="text-black text-xl font-normal font-sans">Phone Number</label>
                        <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-[350px] h-[63px] rounded-2xl border-2 border-neutral-700 px-4"/>
                    </div>
                    <div className="form-input left-[393px] top-0 absolute">
                        <label htmlFor="message" className="text-black text-xl font-normal font-sans">Message</label>
                        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-[428px] h-[200px] rounded-2xl border-2 border-neutral-700 px-4 py-2"/>
                    </div>
                </div>
                <div className="mt-16 w-36 bg-green-300 rounded-2xl shadow p-3.5 cursor-pointer" onClick={handleSubmit}>
                    <div className="text-center text-black text-3xl font-bold font-sans">SEND</div>
                </div>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="w-full h-[130px] py-9 bg-purple shadow flex justify-center items-center">
            <div className="text-center text-white text-xl font-bold font-sans">
                Copyright © 2023 Ratna Amalia<br />
                All rights reserved.
            </div>
        </div>
    )
}

export default Contact;
export default Footer;