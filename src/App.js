import React from 'react';
import ProjectsCarousel from './ProjectsCarousel';
import AboutMe from './Aboutme';
import SocialMedia from './Socialmedia';
import './App.css';

function App() {
    return (
        <div className="App">
            <ProjectsCarousel />
            <AboutMe />
            <SocialMedia />
        </div>
    );
}

export default App;
