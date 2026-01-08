import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker, HiArrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Project Inquiry',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const scriptURL = 'https://script.google.com/macros/s/AKfycby-76HRAeJU62fuOBOZISvXwMw-slTdPfw5J1IQu-wCzaJWn1a3pbpXVFj9wSZnEj7nxA/exec';

        const form = new FormData();
        form.append('name', formData.name);
        form.append('email', formData.email);
        form.append('subject', formData.subject);
        form.append('message', formData.message);

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: form
            });

            if (response.ok) {
                alert('Thank you for your message! I will get back to you soon.');
                setFormData({ name: '', email: '', subject: 'Project Inquiry', message: '' });
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Error!', error.message);
            alert('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com/Sheelendra1', label: 'GitHub' },
        { icon: FaLinkedin, url: 'http://www.linkedin.com/in/sheelendra', label: 'LinkedIn' },
    ];

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="contact-icon">
                        <HiMail />
                    </div>
                    <h2 className="contact-title">Let's Build Something Together</h2>
                    <p className="contact-subtitle">
                        I am currently open to full-time opportunities and freelance projects. Whether
                        you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="info-card">
                            <h3 className="info-title">Contact Information</h3>

                            <div className="info-item">
                                <div className="info-icon">
                                    <HiMail />
                                </div>
                                <div className="info-content">
                                    <span className="info-label">Email</span>
                                    <span className="info-value">sheelendrasingh1904@gmail.com</span>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <HiLocationMarker />
                                </div>
                                <div className="info-content">
                                    <span className="info-label">Location</span>
                                    <span className="info-value">Phagwara, Punjab, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="social-card">
                            <h3 className="social-title">Connect with me</h3>
                            <div className="social-links">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link-btn"
                                        aria-label={social.label}
                                    >
                                        <social.icon />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-input"
                                        placeholder="Sheelendra Singh"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Subject</label>
                                <select
                                    name="subject"
                                    className="form-select"
                                    value={formData.subject}
                                    onChange={handleChange}
                                >
                                    <option value="Project Inquiry">Project Inquiry</option>
                                    <option value="Job Opportunity">Job Opportunity</option>
                                    <option value="Collaboration">Collaboration</option>
                                    <option value="General">General</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea
                                    name="message"
                                    className="form-textarea"
                                    placeholder="Tell me about your project..."
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Send Message <HiArrowRight />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
