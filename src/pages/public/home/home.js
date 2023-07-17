import React from 'react';
import { NavLink } from 'react-router-dom';
import LogementService from "@/_services/logement.service.js"

const Home = () => {
    return (
        <section className="home">
            <ul>
                {
                    LogementService.GetAllLogement().map((logement) => 
                        <NavLink key={logement.id} to={"/logement/" + logement.id + "/#"}>
                            <div>CARD</div>
                        </NavLink>
                    )
                }
            </ul>
        </section>
    )
    
}

export default Home