import React from "react";
import NavButton from "./NavButton";
import './NavBar.scss';

export default function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-links">
                <NavButton to='/Portraits'>Portraits</NavButton>
                <NavButton to='/Home'>Home</NavButton>
                <NavButton to='/Places'>Places</NavButton>
                <NavButton to='/Contact'>Contact</NavButton>
            </div>
        </nav>
    );
};