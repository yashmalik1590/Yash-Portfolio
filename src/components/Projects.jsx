import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCode, HiExternalLink, HiArrowRight } from 'react-icons/hi';
import fuelmateImg from '../assets/images/fuelmate.png';
import aanganImg from '../assets/images/Aangan-Cafe.png';
import nalandaImg from '../assets/images/nalanda-tourism.png';
import poseImg from '../assets/images/pose-analysis.png';
import burgerImg from '../assets/images/burger-hut.png';
import agriWaterImg from '../assets/images/agri-water.png';
import './Projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All Projects');

    const filters = ['All Projects', 'Web Development', 'Mobile Apps', 'UI/UX Design'];

    const projects = [
        {
            id: 0,
            title: 'FuelMate',
            description: 'A comprehensive fuel delivery solution connecting customers with providers. Features include order management, QR verification, and admin dashboard.',
            image: fuelmateImg,
            tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
            category: 'Web Development',
            sourceUrl: 'https://github.com/Sheelendra1/FuelMate',
            demoUrl: 'https://fuelmatee.netlify.app'
        },
        {
            id: 1,
            title: 'Aangan Cafe',
            description: 'A modern restaurant website featuring a dynamic menu, table reservation system, and an elegant UI for an enhanced dining experience.',
            image: aanganImg,
            tags: ['React', 'Tailwind', 'Framer Motion'],
            category: 'Web Development',
            sourceUrl: 'https://github.com/Sheelendra1/Aangan-Cafe',
            demoUrl: 'https://aangan-cafe.vercel.app/'
        },
        {
            id: 2,
            title: 'Explore Nalanda',
            description: 'A tourism website dedicated to Nalanda, showcasing historical sites, hotels, and restaurants with a rich, interactive user interface.',
            image: nalandaImg,
            tags: ['React', 'CSS', 'React Router'],
            category: 'Web Development',
            sourceUrl: 'https://github.com/Sheelendra1/Nalanda-Tourism',
            demoUrl: 'https://explore-nalanda.vercel.app/'
        },
        {
            id: 3,
            title: 'Pose Analysis',
            description: 'An AI-powered application for real-time human pose estimation and analysis, useful for fitness tracking and movement correction.',
            image: poseImg,
            tags: ['AI/ML', 'Computer Vision', 'Python'],
            category: 'Web Development',
            sourceUrl: 'https://github.com/Sheelendra1/Pose-analysis',
            demoUrl: 'https://pose-analysis.netlify.app/'
        },
        {
            id: 4,
            title: 'Burger Hut',
            description: 'A food ordering application for a burger joint, featuring a customizable menu, cart functionality, and a smooth checkout process.',
            image: burgerImg,
            tags: ['React', 'Redux', 'Design'],
            category: 'Web Development',
            sourceUrl: 'https://github.com/Sheelendra1/BurgerHut',
            demoUrl: 'https://burger-hutt.vercel.app/'
        },
        {
            id: 5,
            title: 'Sustainable Agri-Waters',
            description: 'A dedicated platform for promoting sustainable agriculture and water conservation practices helping farmers.',
            image: agriWaterImg,
            tags: ['React', 'Vercel', 'Sustainability'],
            category: 'Web Development',
            sourceUrl: 'https://github.com/Sheelendra1/SustainableAgriWaters',
            demoUrl: 'https://sustainable-agri-waters.vercel.app/'
        }
    ];

    const filteredProjects = activeFilter === 'All Projects'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="projects-title">Selected Works</h2>
                    <p className="projects-subtitle">
                        A showcase of technical projects, web applications, and experiments built
                        during my journey as a B.Tech Web Developer.
                    </p>
                </motion.div>

                <div className="projects-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>

                            <div className="project-content">
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">{tag}</span>
                                    ))}
                                </div>

                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-actions">
                                    <a href={project.sourceUrl} className="btn btn-outline project-btn">
                                        <HiOutlineCode /> Source
                                    </a>
                                    <a href={project.demoUrl} className="btn btn-primary project-btn">
                                        <HiExternalLink /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="projects-footer">
                    <a href="https://github.com/sheelendra" className="btn btn-primary view-all-btn" target="_blank" rel="noopener noreferrer">
                        View All Projects <HiArrowRight />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
