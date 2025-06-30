import React from "react";
import { useNavigate } from "react-router-dom";
import NavButton from "../components/NavButton";


export const SplashScreen = () => {
    const navigate = useNavigate();

    const handleEnterClick = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    return (
        <div className="main-index" style={{ backgroundImage: `url('/background.jpg')` }}>
            <div className="enter">
                <NavButton
                    to="/Home"
                    onClick={handleEnterClick}
                    className="splash-enter-button">
                    Enter
                </NavButton>
            </div>
        </div>
    )
}