
import React from 'react';
import { NavLink } from "react-router-dom";
import '@/assets/sass/layout/footer.scss'
import LogoFooter from '@/assets/images/LogoFooter.png'

// fonction d'affichage du Footer
const Footer = () => {
    return (
        <footer>
            <section className="footer-container">
                <NavLink to="/home" className="navlink__logo"><img src={LogoFooter} alt="Logo" /></NavLink>
                <p>© 2022 Kasa. Tous droits réservés</p>
            </section>
        </footer>
    );
}

export default Footer;