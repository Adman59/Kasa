
import React from 'react';

import Logo from '@/assets/images/LogoFooter.png'

// fonction d'affichage du Footer
const Footer = () => {
    return (
        <footer>
            <section className="footer-container">
                <img src={Logo} alt="Logo" />
                <p>© 2022 Kasa. Tous droits réservés</p>
            </section>
        </footer>
    );
}

export default Footer;