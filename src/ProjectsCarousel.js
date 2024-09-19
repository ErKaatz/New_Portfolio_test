import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProjectsCarousel.css';
const ProjectsCarousel = () => {
    const projects = [
        {
            title: 'Proyecto 1',
            videoSrc: 'assets/videos/proyecto1.mp4',
            description: 'Descripción del Proyecto 1, tecnologías usadas: React, Node.js, etc.',
            link: '/proyecto1'
        },
        {
            title: 'Proyecto 2',
            videoSrc: 'assets/videos/proyecto2.mp4',
            description: 'Descripción del Proyecto 2, tecnologías usadas: Python, Django, etc.',
            link: '/proyecto2'
        }
        // Agrega más proyectos aquí...
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section id="projects-carousel">
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index} className="project-slide">
                        <video src={project.videoSrc} controls></video>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link}>Ver Proyecto</a>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default ProjectsCarousel;
