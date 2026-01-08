import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiBookOpen, HiDocumentText, HiArrowRight, HiLocationMarker } from 'react-icons/hi';
import lpuImg from '../assets/images/lpu-campus.jpg';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: 'Bachelor of Technology',
            field: 'Computer Science & Engineering',
            institution: 'Lovely Professional University',
            location: 'Phagwara, Punjab',
            period: '2023 - 2027',
            current: true,
            icon: HiAcademicCap,
            skills: ['Data Structures', 'Web Development', 'DBMS'],
            hasImage: true,
            image: lpuImg
        },
        {
            id: 2,
            degree: 'Higher Secondary Education (Class XII)',
            field: 'Science Stream (PCM)',
            institution: 'Arcadian Public School',
            location: 'Mathura, Uttar Pradesh',
            period: '2020 - 2022',
            current: false,
            icon: HiBookOpen,

        },
        {
            id: 3,
            degree: 'Secondary Education (Class X)',
            field: 'Foundation',
            institution: 'Arcadian Public School',
            location: 'Mathura, Uttar Pradesh',
            period: '2019 - 2020',
            current: false,
            icon: HiDocumentText
        }
    ];

    return (
        <section id="education" className="education">
            <div className="education-container">
                <motion.div
                    className="education-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="education-title">Education</h2>
                    <div className="education-title-underline"></div>
                    <p className="education-subtitle">
                        My academic journey has been driven by a passion for technology and problem-solving.
                        Here is a timeline of my educational milestones.
                    </p>
                </motion.div>

                <div className="education-timeline">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            className={`timeline-item ${edu.current ? 'current' : ''}`}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-icon">
                                <edu.icon />
                            </div>

                            <div className="timeline-content">
                                <div className="timeline-card">
                                    <div className="timeline-card-header">
                                        <div className="timeline-meta">
                                            {edu.current && <span className="current-badge">PRESENT</span>}
                                            <span className="timeline-period">{edu.period}</span>
                                        </div>

                                        <h3 className="timeline-degree">{edu.degree}</h3>
                                        <p className="timeline-field">{edu.field}</p>

                                        <div className="timeline-info">
                                            <span className="timeline-institution">
                                                <HiLocationMarker /> {edu.institution}
                                            </span>
                                            {/* <span className="timeline-score">• {edu.score}</span> */}
                                        </div>

                                        {edu.skills && (
                                            <div className="timeline-skills">
                                                {edu.skills.map((skill, i) => (
                                                    <span key={i} className="timeline-skill-tag">{skill}</span>
                                                ))}
                                            </div>
                                        )}

                                        {edu.description && (
                                            <p className="timeline-description">{edu.description}</p>
                                        )}

                                        {edu.current && (
                                            <a href="#" className="timeline-link">
                                                View Coursework Details <HiArrowRight />
                                            </a>
                                        )}
                                    </div>

                                    {edu.hasImage && (
                                        <div className="timeline-image">
                                            <img src={edu.image} alt={edu.institution} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
