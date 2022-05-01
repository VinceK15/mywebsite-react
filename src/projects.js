import React from 'react';
import logo from './logo2.jpg';
import preview1 from './img/taskmanager.jpg'

const projects = () => {
    return <div>
        <h1 className='myName'>Vincent Kuan <img className='logo' src={logo} />
        <a href="./homepage" className="links">Home</a>
        <a href="./aboutMe" className="links">About Me</a>
        <a href="./projects" className="links">Projects</a>
        </h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="project1">
        <p className="project1title">Taskmanager with React.JS (Github):</p>  
        <a href="https://github.com/VinceK15/taskmanager" className="githublink">GitHub</a>
        <a href="https://taskmanagervincek15.herokuapp.com" className="herokulink">Website</a>
        <iframe className="project1video"width="500" height="400" src="https://youtube.com/embed/ISL8pkKJfSY"> </iframe>
        </div>
    </div>;
};

//<img src={preview1} class="preview1"></img>
//Image preview of project1

export default projects;
