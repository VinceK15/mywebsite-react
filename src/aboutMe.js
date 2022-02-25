import React from 'react';
import logo from './logo2.jpg';

const aboutMe = () => {
    return <div>
        <h1 className='myName'>Vincent Kuan <img className='logo' src={logo} />
        <a href="./homepage" id="links">Home</a>
        <a href="./aboutMe" id="links">About Me</a>
        <a href="./projects" id="links">Projects</a>
        </h1>
        <br></br>
        <br></br>
        <p>My Github:  <a href="https://github.com/VinceK15" >https://www.github.com/VinceK15</a></p>
    </div>;
};

export default aboutMe;
