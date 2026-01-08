import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiMail, HiOutlineCode } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from '../assets/images/MyImage2.jpeg';
import './Hero.css';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="hero-badge">
                        Welcome to my portfolio
                    </span>

                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Sheelendra Singh</span>
                        <span className="dot">.</span>
                    </h1>

                    <h2 className="hero-subtitle">Full Stack Web Developer</h2>

                    <p className="hero-description">
                        Building scalable web applications & solving complex problems.
                        I am a final year B.Tech student.
                    </p>

                    <div className="hero-cta">
                        <button
                            className="btn btn-primary hero-btn"
                            onClick={() => scrollToSection('projects')}
                        >
                            View Projects
                            <HiArrowRight />
                        </button>
                        <button
                            className="btn btn-secondary hero-btn"
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact Me
                            <HiMail />
                        </button>
                    </div>

                    <div className="hero-divider"></div>

                    <div className="hero-social">
                        <a
                            href="https://github.com/Sheelendra1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <HiOutlineCode />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="http://www.linkedin.com/in/sheelendra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="mailto:sheelendrasingh1904@gmail.com"
                            className="social-link"
                        >
                            <HiMail />
                            <span>Email</span>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="hero-image-wrapper">
                        <div className="hero-image-frame">
                            <img
                                src={profilePic}
                                alt="Sheelendra Singh"
                                className="hero-image"
                            />
                            <div className="hero-image-overlay"></div>
                        </div>

                        {/* <div className="hero-project-badge">
                            <div className="project-badge-icon">
                                <HiOutlineCode />
                            </div>
                            <div className="project-badge-content">
                                <span className="project-badge-title">Latest Project</span>
                                <span className="project-badge-name">FulMate</span>
                            </div>
                            <HiArrowRight className="project-badge-arrow" />
                        </div> */}
                    </div>
                </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
                className="hero-stats"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <div className="stats-container">
                    <div className="stat-item">
                        <div className="stat-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                <path d="M6 12v5c3 3 9 3 12 0v-5" />
                            </svg>
                        </div>
                        <div className="stat-content">
                            <span className="stat-value">B.Tech</span>
                            <span className="stat-label"> THIRD YEAR</span>
                        </div>
                    </div>

                    {/* <div className="stat-item">
                        // <div className="stat-icon">
                        //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        //         <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                        //     </svg>
                        // </div>
                        <div className="stat-content">
                            <span className="stat-value">MERN</span>
                            <span className="stat-label">STACK EXPERT</span>
                        </div>
                    </div> */}

                    <div className="stat-item">
                        <div className="stat-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 20V10M18 20V4M6 20v-4" />
                            </svg>
                        </div>
                        <div className="stat-content">
                            <span className="stat-value">5+</span>
                            <span className="stat-label">PROJECTS BUILT</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Footer */}
            {/* <div className="hero-footer">
                <p>© 2024 Sheelendra Singh. All rights reserved.</p>
                <div className="hero-footer-links">
                    <a href="https://github.com/Sheelendra1" target="_blank" rel="noopener noreferrer">
                        <HiOutlineCode />
                    </a>
                    <a href="http://www.linkedin.com/in/sheelendra" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:sheelendrasingh1904@gmail.com">
                        <HiMail />
                    </a>
                </div>
            </div> */}
        </section>
    );
};

export default Hero;
