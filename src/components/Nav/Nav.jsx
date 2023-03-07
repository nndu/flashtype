import React from "react";
import logo from './../../assets/logo.png';
import './Nav.css'

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">FlashType</p>
            </div>
            <div className="nar-right">
                <a
                    target="_blank"
                    className="nav-aam-link"
                    href="https://www.linkedin.com/in/jenny-nguyen-750618105/"
                    rel="noreferrer"
                >MyLinkedIn</a>
            </div>
        </div>
    );
};

export default Nav;