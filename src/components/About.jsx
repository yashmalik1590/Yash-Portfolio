import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiOutlineCode } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiMongodb, SiGit } from 'react-icons/si';
import profilePic from '../assets/images/MyImage1.jpeg';
import './About.css';

const About = () => {
    const techStack = [
        { name: 'React', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind', icon: SiTailwindcss },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Git', icon: SiGit },
    ];

    return (
        <section id="about" className="about">
            <div className="about-container">
                <motion.div
                    className="about-image-section"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="about-image-wrapper">
                        <div className="about-image-frame">
                            <img
                                src={profilePic}
                                alt="Sheelendra Singh"
                                className="about-image"
                            />
                            <div className="about-status">
                                <span className="status-dot"></span>
                                <span>Open to work</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-metrics">
                        <div className="metric-card">
                            <span className="metric-value">5+</span>
                            <span className="metric-label">Projects Completed</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value">7.23</span>
                            <span className="metric-label">CGPA</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="about-header">
                        <span className="about-label">— ABOUT ME</span>
                        <h2 className="about-title">
                            Crafting Digital Experiences<br />with Clean Code
                        </h2>
                        <h3 className="about-subtitle">B.Tech CSE Student & Full Stack Developer</h3>
                    </div>

                    <div className="about-description">
                        <p>
                            Hello! I'm a passionate developer currently pursuing my B.Tech degree at
                            Lovely Professional University. My journey into tech began when I edited
                            my first HTML file, and I've been hooked on the infinite possibilities of
                            web development ever since.
                        </p>
                        <p>
                            I specialize in building responsive, accessible, and performant web applications.
                            Beyond syntax and frameworks, I focus on solving real-world problems through
                            efficient algorithms and intuitive design. I am currently looking for opportunities
                            to contribute to a forward-thinking engineering team.
                        </p>
                    </div>

                    <div className="about-tech">
                        <h4 className="tech-title">TECH STACK</h4>
                        <div className="tech-tags">
                            {techStack.map((tech, index) => (
                                <div key={index} className="tech-tag">
                                    <tech.icon className="tech-icon" />
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-actions">
                        <a href="/resume.pdf" className="btn btn-primary about-resume" download>
                            <HiDownload />
                            Download Resume
                        </a>
                        <a
                            href="https://github.com/Sheelendra1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-icon"
                        >
                            <HiOutlineCode />
                        </a>
                        <a
                            href="http://www.linkedin.com/in/sheelendra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-icon"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="mailto:sheelendrasingh1904@gmail.com"
                            className="btn-icon"
                        >
                            <MdEmail />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
