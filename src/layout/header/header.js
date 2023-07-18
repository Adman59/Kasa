
import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '@/assets/images/Logo.png'
import '@/assets/sass/layout/header.scss'


const Header = () => {

    return (
        <header>
            <NavLink to="/home" className="navlink__logo"><img src={Logo} alt="Logo" /></NavLink>
            <nav>
                <ul>
                    <li><NavLink to="/home" className="navlink__menu" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}>Accueil</NavLink></li>
                    <li><NavLink to="/about" className="navlink__menu" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}>À propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );

};


export default Header