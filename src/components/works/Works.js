import React from 'react'
import './Works.css'
import { FaAngular, FaNodeJs, FaReact, FaAws, FaDatabase } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiSocketdotio, SiRedis, SiMysql } from 'react-icons/si'

function Works() {
    var publicFolder = "../../../asserts/Projects/";
    
    const techIcons = {
        'Angular': <FaAngular />,
        'NodeJS': <FaNodeJs />,
        'MongoDB': <SiMongodb />,
        'React': <FaReact />,
        'Express': <SiExpress />,
        'AWS': <FaAws />,
        'Socket.io': <SiSocketdotio />,
        'Redis': <SiRedis />,
        'Mysql': <SiMysql />,
        'HTML': <FaDatabase />
    };

    return (<div id="works">
        <section id="latest-works">
            <div className="latest-work-title">
                <h3>Latest Works</h3>
                <p>Perfect solutions for digital experience</p>
            </div>

            <div className="projects-container">
                <div className="project-card project-card-1">
                    <div className="project-content">
                        <div className="title">
                            <h3>Slated.ai</h3>
                            <div className="tech-stack">
                                {['Angular', 'NodeJS', 'MongoDB'].map(tech => (
                                    <div key={tech} className="tech-item">
                                        {techIcons[tech]}
                                        <p>{tech}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="project-description">
                            A modern web application built with Angular and Node.js, featuring real-time data processing and interactive user interfaces.
                        </p>
                        <div className="project-image">
                            <img src={publicFolder + "slated-homepage.png"} alt="Slated.ai Project" className="project-img-2" />
                        </div>
                    </div>
                </div>

                <div className="project-card project-card-2">
                    <div className="project-content">
                        <div className="title">
                            <h3>Onpassive</h3>
                            <div className="tech-stack">
                                {['React', 'NodeJS', 'MongoDB', 'Express', 'AWS', 'Socket.io', 'Redis'].map(tech => (
                                    <div key={tech} className="tech-item">
                                        {techIcons[tech]}
                                        <p>{tech}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="project-description">
                            ONPASSIVE offers O-Connect, a revolutionary platform for businesses and individuals to enhance virtual communication.
                            It provides an efficient way for seamless connection and interaction regardless of geographical boundaries.
                        </p>
                        <div className="project-image">
                            <img src={publicFolder + "/2.webp"} alt="Onpassive Project" className="project-img-1" />
                            <img src={publicFolder + "/1.webp"} alt="Onpassive Project" className="project-img-1" />
                            <img src={publicFolder + "/3.webp"} alt="Onpassive Project" className="project-img-1" />
                        </div>
                    </div>
                </div>

                <div className="project-card project-card-3">
                    <div className="project-content">
                        <div className="title">
                            <h3>Mission Bhagiratha</h3>
                            <div className="tech-stack">
                                {['Node JS', 'Mysql', 'HTML'].map(tech => (
                                    <div key={tech} className="tech-item">
                                        {techIcons[tech]}
                                        <p>{tech}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="project-description">
                            A comprehensive water management system built to monitor and manage water resources effectively,
                            featuring real-time data tracking and reporting capabilities.
                        </p>
                        <div className="project-image">
                            <img src={publicFolder + "Mb.png"} alt="Mission Bhagiratha Project" className="project-img-3" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="all-projects">
                <a href="">
                    <h3>ALL PROJECTS</h3>
                </a>
                <p>* Some projects are not allowed to publish by NDA<br />if you want to see more. <a href="">CONTACT</a></p>
            </div>
        </section></div>
    )
}

export default Works