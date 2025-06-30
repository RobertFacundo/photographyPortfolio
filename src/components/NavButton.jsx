import React from "react";
import { NavLink } from "react-router-dom";
import './NavButton.css';

const NavButton = ({ to, children, className, onClick }) => {
    const buttonClasses = `nav-button ${className || ''}`.trim();
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? `${buttonClasses} active` : buttonClasses
            }
            onClick={onClick}>
            {children}
        </NavLink>
    );
};

export default NavButton;