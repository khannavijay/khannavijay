import React from 'react'
import './Introduction.css'

function Introduction() {
    var publicFolder = "../../../asserts/SVGIcons/";
    return (
        <section id="introduction">
            <div className="cards">
                <div className="design-card active">
                    <div className="tech-stack">
                        <h3>Frontend Development</h3>
                        <div className="tech-stack">
                            <span style={{"marginLeft": "5px"}}><img src={publicFolder + "html-5.svg"} height="30px" /></span>
                            <span style={{"marginLeft": "5px"}}><img src={publicFolder + "css3.svg"} height="30px" /></span>
                            <span style={{"marginLeft": "5px"}}><img src={publicFolder + "javascript.svg"} height="30px" /></span>
                            <span style={{"marginLeft": "5px"}}><img src={publicFolder + "angular-icon.svg"} height="25px" /></span>
                            <span style={{"marginLeft": "5px"}}><img src={publicFolder + "reactjs-icon.svg"} height="25px" /></span>
                        </div>

                        <i className="fa-solid fa-code"></i>
                    </div>
                    <p>Making the Web Look Good</p>
                    <a href="">8 PROJECTS</a>
                </div>
                <div className="design-card">
                    <div className="tech-stack">
                        <h3>Backend Development</h3>
                        <div className="tech-stack">
                            <span style={{"marginLeft": "5px"}}><img src={publicFolder + "nodejs-icon.svg"} height="25px" /></span>
                            <span style={{"marginLeft": "5px"}}><img src={publicFolder + "expressjs-icon.svg"} height="25px" /></span>
                        </div>
                        <i className="fa-solid fa-terminal"></i>
                    </div>
                    <p>Building the Web’s Backbone by implimenting REST and Micro Services</p>
                    <a href="">10 PROJECTS</a>
                </div>
                <div className="design-card">
                    <div className="tech-stack">
                        <h3>Database Designing</h3>
                        <div className="tech-stack">
                            <span style={{"marginLeft": "5px"}}><img src={publicFolder + "PostgreSQL-Dark.svg"} height="35px" /></span>
                            <span style={{"marginLeft": "5px"}}><img src={publicFolder + "MySQL-Dark.svg"} height="35px" /></span>
                            <span style={{"marginLeft": "5px"}}><img src={publicFolder + "mongodb-icon.svg"} height="35px" /></span>
                        </div>
                        <i className="fa-solid fa-table"></i>
                    </div>
                    <p>Building the Data Models, Fine tune Database performence by query optimization</p>
                    <a href="">10 PROJECTS</a>
                </div>
                <div className="design-card">
                    <div className="tech-stack">
                        <h3>Deploy and Maintain</h3>
                        <div className="tech-stack">
                            <span style={{"marginLeft": "5px"}}><img src={publicFolder + "google_cloud-icon.svg"} height="25px" /></span>
                            <span style={{"marginLeft": "5px"}}><img src={publicFolder + "amazon_aws-icon.svg"} height="25px" /></span>
                        </div>
                        <i className="fa-solid fa-server"></i>
                    </div>
                    <p>Maintaining the Application servers</p>
                    <a href="">10 PROJECTS</a>
                </div>
            </div>
            <div className="introduction-text">
                <p>Introduction</p>
                <h2>Hello! I'm T Khanna Vijay</h2>
                <h4>Elevating User Experiences through Full Stack Engineering Mastery</h4>
                <p>I am a full stack web developer who is passionate about crafting engaging and seamless user experiences
                    for web and mobile applications. Leveraging my expertise in both front-end and back-end technologies, I
                    combine technical prowess with user-centric design principles to create interfaces that are not only
                    visually appealing but also highly functional and user-friendly. </p>
                <p>As a backend developer, I create robust and scalable web applications that handle the logic and data
                    behind the scenes. I use my skills in NodeJS, Mysql, MongoDB, and various APIs and tools to develop and
                    deploy backend systems that are secure, reliable, and efficient.</p>
            </div>

        </section>
    )
}

export default Introduction