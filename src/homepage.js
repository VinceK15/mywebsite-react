import React, {useState} from 'react';
import logo from './logo2.jpg';

const homepage = () => {
    return <div id="background">
        <h1 className='myName'>Vincent Kuan <img className='logo' src={logo} />
        <a href="./homepage" id="links">Home</a>
        <a href="./aboutMe" id="links">About Me</a>
        <a href="./projects" id="links">Projects</a>
        </h1>
        <br></br>
        <br></br>

<p>Hi! My name is Vincent Kuan and I am a graduate at Seneca College, majoring in Computer Programming. I am currently looking
for an entry-level software developer position</p>

<p>My first experience with computer programming was in high school with Turing and Web Development. </p>
<p>At the time, I decided to study Opticianry in post-secondary school but was always interested in software development and technologies as it continued to evolve over the years.</p>
<p>After a few years studying Opticianry @ Seneca College, I decided to study Computer Programming because I enjoy it.</p>

<p>Here is where I put my projects that I have worked on, while continuing to create better and more projects in the future.</p>

<p>Thank you for visiting my page!</p>
</div>
};

export default homepage;
