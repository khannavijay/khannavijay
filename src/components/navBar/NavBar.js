import React, { useState } from 'react';
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from 'react-router-dom';
import ThemeToggle from '../theme/ThemeToggle';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSocialOpen, setIsSocialOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsSocialOpen(false);
    };

    const toggleSocial = () => {
        setIsSocialOpen(!isSocialOpen);
        setIsMenuOpen(false);
    };

    var socialMedia = [
        { ref: "https://www.linkedin.com/in/khannavijay-tanneeru-7310757b", lable: "LinkedIn", icon: "fa-brands fa-linkedin-in" },
        { ref: "https://github.com/khannavijay", lable: "Github", icon: "fa-brands fa-github" },
        { ref: "mailto:tkhannavijay@gmail.com", lable: "Email", icon: "fa-regular fa-envelope" }
    ];

    return (
        <section id='header'>
            <div className='navbar-title'>
                <RouterLink to="/" className="title-link">
                    <h3 className='title-first-name'>Khanna vijay</h3>
                    <h3 className='title-last-name'>Tanneeru</h3>
                </RouterLink>
            </div>
            
            <div className='mobile-menu-btn' onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <div>
                <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><ScrollLink
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </ScrollLink></li>
                    <li><ScrollLink
                        to="introduction"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </ScrollLink></li>
                    <li><ScrollLink
                        to="works"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Works
                    </ScrollLink></li>
                    <li><ScrollLink
                        to="blogs"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Blogs
                    </ScrollLink></li>
                    <li><ScrollLink
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </ScrollLink></li>
                </ul>
            </div>

            <div>
                <ul className={`social-media ${isSocialOpen ? 'active' : ''}`}>
                    {socialMedia.map((item, index) => (
                        <li key={index}>
                            <i className={item.icon}></i>
                            <a href={item.ref} target="_blank" rel="noopener noreferrer">{item.lable}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <ThemeToggle />
        </section>
    )
}

export default NavBar
