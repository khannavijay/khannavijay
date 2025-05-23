import React from 'react'
import './Home.css'
import NeuralBrainBackground from './NeuralBrainBackground';

export default function Home() {
    const publicFolder = `${process.env.PUBLIC_URL}/asserts/SVGIcons/`;
    const techImages = [
        { src: "nodejs-icon.svg", alt: "Node.js" },
        { src: "python.svg", alt: "Python" },
        { src: "expressjs-icon.svg", alt: "Express.js" },
        { src: "google_cloud-icon.svg", alt: "Google Cloud" },
        { src: "amazon_aws-icon.svg", alt: "AWS" },
        { src: "html-5.svg", alt: "HTML5" },
        { src: "figma.svg", alt: "Figma" },
        { src: "css3.svg", alt: "CSS3" },
        { src: "javascript.svg", alt: "JavaScript" },
        { src: "angular-icon.svg", alt: "Angular" },
        { src: "reactjs-icon.svg", alt: "React" },
        { src: "PostgreSQL-Dark.svg", alt: "PostgreSQL" },
        { src: "MySQL-Dark.svg", alt: "MySQL" },
        { src: "mongodb-icon.svg", alt: "MongoDB" },
        { src: "Github-Dark.svg", alt: "GitHub" }
    ];

    return (
        <section id="content-home" style={{position: 'relative', overflow: 'hidden'}}>
            <NeuralBrainBackground />
            <div className="body-part-1">
                <div className="developer-intro">
                    <p>Full-Stack Developer</p>
                </div>
                <div className="body-title">
                    <h1>Full Stack Wizard: Coding</h1>
                    <p>I design and code beautifully simple things,<br />and I love what I do.</p>
                    <a href="#contact">LET'S CHAT!</a>
                </div>
                <div className="body-tail">
                    <h1>10</h1>
                    <p>YEARS<br />EXPERIENCE</p>
                    <h1>10+</h1>
                    <p>PROJECTS<br />COMPLETED</p>
                </div>
            </div>
            <div className='body-part-2'>
                <div className="hoodie-guy-animation-class">
                    <div className="hoodie-guy"></div>
                    <div className="circle">
                        {techImages.map((item, index) => (
                            <span key={index} style={{"--i": index + 1}}>
                                <img 
                                    src={publicFolder + item.src} 
                                    alt={item.alt} 
                                    height="75px" 
                                />
                            </span>
                        ))}
                    </div>
                </div>
                <div className="background-circle"></div>
            </div>
        </section>
    )
}

