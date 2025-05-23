import React from 'react'
import './Home.css'
import NeuralBrainBackground from './NeuralBrainBackground';

export default function Home() {
    var publicFolder = "../../../asserts/SVGIcons/";
    var techImages = ["nodejs-icon.svg","python.svg","expressjs-icon.svg","google_cloud-icon.svg","amazon_aws-icon.svg","html-5.svg","figma.svg","css3.svg","javascript.svg","angular-icon.svg","reactjs-icon.svg","PostgreSQL-Dark.svg","MySQL-Dark.svg","mongodb-icon.svg","Github-Dark.svg"];
    return (
        <section id="content-body" style={{position: 'relative', overflow: 'hidden'}}>
            <NeuralBrainBackground />
            <div className="body-part-1">
                <div className="developer-intro">
                    <p>Full-Stack Developer</p>
                </div>
                <div className="body-title">
                    <h1>Full Stack Wizard: Coding</h1>
                    <p>I design and code beautifully simple things,<br />and I love what I do.</p>
                    <a href="#">LET'S CHAT!</a>
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
                        {techImages.map((item, index)=>{
                            return <span key={index} style={{"--i":index+1}}><img src={publicFolder+item} alt={item} height="75px" /></span>
                        })}
                </div>
                </div>
                <div className="background-circle"></div>
            </div>
        </section>
    )
}

