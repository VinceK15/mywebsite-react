import React, {useState} from 'react';
import logo from './logo2.jpg';
import {motion} from "framer-motion"

export default function Homepage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
    <div id="background">
        <motion.div               
        className="modal-content"
              initial={{ opacity: 0, y: "300px" }}              
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: 0.3, y: 1.3 }}
            >
        <h1 className='myName'>Vincent Kuan <img className='logo' src={logo} />
        <a href="./homepage" className="links">Home</a>
        <a href="./aboutMe" className="links" onClick={() => setIsModalOpen(!isModalOpen)}>About Me</a>
        <a href="./projects" className="links">Projects</a>
        </h1>
        <br></br>
        <br></br>

<p className="homeparagraph">Hi! My name is Vincent Kuan and I am a graduate at Seneca College, majoring in Computer Programming. I am currently looking
for an entry-level software developer position</p>

<p>My first experience with computer programming was in high school with Turing and Web Development. </p>
<p>At the time, I decided to study Opticianry in post-secondary school but was always interested in software development and technologies as it continued to evolve over the years.</p>
<p>After a few years studying Opticianry @ Seneca College, I decided to study Computer Programming because I enjoy it.</p>

<p>Here is where I put my projects that I have worked on, while continuing to create better and more projects in the future.</p>

<p>Thank you for visiting my page!</p>
</motion.div>
</div>
    );
}


