// src/views/Contact.jsx
import React from "react";
import '../styles/ContactView.scss';
import { FaGithub } from "react-icons/fa";

export const Contact = () => {
    return (
        <div className="contact-content">
            <div className="contactDetails">
                <p>
                    Hello! This is a practice project developed with React, designed to serve as a photography portfolio. <br /><br /> Explore the application to see how I manage and present images interactively.
                </p>
                <a
                    href="https://github.com/RobertFacundo?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                >
                    <FaGithub />
                </a>
            </div>
        </div>
    );
};