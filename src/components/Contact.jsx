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


// import React, { useState } from 'react';
// import axios from 'axios';

// const Contact = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [message, setMessage] = useState("");
//     const [submitting, setSubmitting] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             setSubmitting(true);
//             const response = await axios.post('http://127.0.0.1:5000/api/contact', { name, email, phoneNumber, message });
//             console.log(response.data);
//             // console.log("Sending request...");
//             // console.log("Request sent successfully!");

//             // logika atau notif ke user
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setSubmitting(false);
//         };
//     };

//     return (
//         <div id="contact" className="w-full min-h-screen flex items-center bg-cyan-100">
//             <div className="w-[800px] h-[550px] relative bg-white rounded-2xl shadow flex-col justify-start items-center inline-flex p-8 mx-auto mt-40 mb-16">
//                 <div className="w-[541px] text-center text-black text-3xl font-bold font-sans mb-10">
//                     Want to learn together?<br/> 
//                     Contact me at here👇
//                 </div>
//                 <div className="w-full h-[287px] grid grid-cols-2 gap-8">
//                     <div className="grid-row-3">
//                         <div className="form-input">
//                             <label htmlFor="name" className="text-black text-xl font-semibold font-sans">Name</label>
//                             <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required="required" className="w-[350px] h-[55px] rounded-2xl border-2 border-neutral-700 px-4"/>
//                         </div>
//                         <div className="form-input py-4">
//                             <label htmlFor="email" className="text-black text-xl font-semibold font-sans">Email</label>
//                             <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required="required" className="w-[350px] h-[55px] rounded-2xl border-2 border-neutral-700 px-4"/>
//                         </div>
//                         <div className="form-input">
//                             <label htmlFor="phoneNumber" className="text-black text-xl font-semibold font-sans">Phone Number</label>
//                             <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required="required" className="w-[350px] h-[55px] rounded-2xl border-2 border-neutral-700 px-4"/>
//                         </div>
//                     </div>
//                     <div className="form-input">
//                         <label htmlFor="message" className="text-black text-xl font-semibold font-sans">Message</label>
//                         <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required="required" className="w-[350px] h-[255px] rounded-2xl border-2 border-neutral-700 px-4 py-2"/>
//                     </div>
//                 </div>
//                 <div className="mt-8 w-36 bg-green-300 rounded-2xl shadow p-3 cursor-pointer" onClick={handleSubmit}>
//                     <div className="text-center text-black text-2xl font-bold font-sans">SEND</div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Contact;