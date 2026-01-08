import React from 'react';
import { HiOutlineCode, HiHeart } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <p className="footer-copyright">
                        © {currentYear} Sheelendra Singh. All rights reserved.
                    </p>
                    <p className="footer-tagline">
                        Designed & Built with <HiHeart className="heart-icon" /> by me
                    </p>
                </div>

                <div className="footer-links">
                    <a
                        href="https://github.com/Sheelendra1"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <HiOutlineCode />
                    </a>
                    <a
                        href="http://www.linkedin.com/in/sheelendra"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:sheelendrasingh1904@gmail.com"
                        aria-label="Email"
                    >
                        <MdEmail />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
