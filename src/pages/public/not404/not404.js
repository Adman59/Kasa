import React from 'react';
import { NavLink } from "react-router-dom";

const Not404 = () => {
    return (
        <section className="not404">
            <h1>404<span>Oups ! La page que vous demandez n'existe pas.</span></h1>
            <NavLink to="/home" className="navlink__404">Retourner sur la page d'accueil</NavLink>
        </section>
    )
    
}

export default Not404