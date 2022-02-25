import React from 'react';
import logo from './logo2.jpg';
import preview1 from './img/taskmanager.jpg'

const projects = () => {
    return <div>
        <h1 className='myName'>Vincent Kuan <img className='logo' src={logo} />
        <a href="./homepage" id="links">Home</a>
        <a href="./aboutMe" id="links">About Me</a>
        <a href="./projects" id="links">Projects</a>
        </h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className="pimage">Taskmanager with React.JS (Github):  <a href="https://github.com/VinceK15/taskmanager" className="GithubTitle">GitHub</a> <a href="https://taskmanagervincek15.herokuapp.com" >Website</a></p>
        <img src={preview1} class="preview1"></img>
    </div>;
};

export default projects;
