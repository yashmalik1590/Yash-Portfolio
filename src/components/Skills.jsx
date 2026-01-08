import React from 'react';
import { motion } from 'framer-motion';
import {
    SiJavascript, SiPython, SiReact, SiCplusplus,
    SiNodedotjs, SiTailwindcss, SiMongodb, SiHtml5,
    SiAndroidstudio, SiFreecodecamp
} from 'react-icons/si';
import { FaJava, FaMobileAlt, FaAws, FaLightbulb, FaUserCheck, FaHandsHelping } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { HiOutlineCode, HiOutlineTerminal, HiOutlineDesktopComputer } from 'react-icons/hi';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            icon: HiOutlineCode,
            iconColor: '#4a90d9',
            skills: [
                { name: 'Java', desc: 'OOP Fundamentals', icon: FaJava, color: '#e76f00' },
                { name: 'C++', desc: 'System Programming', icon: SiCplusplus, color: '#00599C' },
                { name: 'Python', desc: 'Scripting & AI', icon: SiPython, color: '#3776ab' },
                { name: 'JavaScript', desc: 'Web Interaction', icon: SiJavascript, color: '#f7df1e' },
            ],
            extras: ['C', 'PHP']
        },
        {
            title: 'Web Tech & Frameworks',
            icon: HiOutlineTerminal,
            iconColor: '#22c55e',
            skills: [
                { name: 'React.js', desc: 'Frontend Library', icon: SiReact, color: '#61dafb' },
                { name: 'Node.js', desc: 'Backend Runtime', icon: SiNodedotjs, color: '#68a063' },
                { name: 'Tailwind CSS', desc: 'Utility CSS', icon: SiTailwindcss, color: '#38bdf8' },
                { name: 'HTML5', desc: 'Structure', icon: SiHtml5, color: '#e34f26' },
            ],
            extras: ['CSS3', 'Express', 'Bootstrap']
        },
        {
            title: 'Tools & Platforms',
            icon: HiOutlineDesktopComputer,
            iconColor: '#f59e0b',
            skills: [
                { name: 'MongoDB', desc: 'NoSQL Database', icon: SiMongodb, color: '#47a248' },
                { name: 'VS Code', desc: 'Code Editor', icon: VscVscode, color: '#007acc' },
                { name: 'Android Studio', desc: 'Mobile Dev', icon: SiAndroidstudio, color: '#3ddc84' },
                { name: 'freeCodeCamp', desc: 'Learning Platform', icon: SiFreecodecamp, color: '#0a0a23' },
            ],
            extras: ['Antigravity', 'Postman', 'Git']
        }
    ];

    const softSkills = [
        { name: 'Creative Problem Solving', icon: FaLightbulb, color: '#f59e0b' },
        { name: 'Accountability', icon: FaUserCheck, color: '#22c55e' },
        { name: 'Mentoring', icon: FaHandsHelping, color: '#3b82f6' },
    ];

    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <motion.div
                    className="skills-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="section-badge">
                        <span className="dot"></span>
                        Tech Enthusiast
                    </span>
                    <h2 className="section-title">Technical Arsenal</h2>
                    <p className="section-subtitle">
                        My expertise lies in building full-stack applications with a focus on scalability
                        and clean architecture. Here is a breakdown of the languages, frameworks,
                        and tools I use daily.
                    </p>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="skill-card-header">
                                <div className="skill-card-icon" style={{ color: category.iconColor }}>
                                    <category.icon />
                                </div>
                                <h3 className="skill-card-title">{category.title}</h3>
                            </div>

                            <div className="skill-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-item-icon" style={{ color: skill.color }}>
                                            <skill.icon />
                                        </div>
                                        <div className="skill-item-content">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-desc">{skill.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="skill-extras">
                                {category.extras.map((extra, i) => (
                                    <span key={i} className="skill-extra-tag">{extra}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="exploring-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="exploring-label">SOFT SKILLS</span>
                    <div className="exploring-tags">
                        {softSkills.map((skill, index) => (
                            <div key={index} className="exploring-tag">
                                <skill.icon style={{ color: skill.color }} />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
