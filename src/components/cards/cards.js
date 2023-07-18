import React from 'react';
import { NavLink } from 'react-router-dom';
import LogementService from "@/_services/logement.service.js"

const Cards = () => {
    return (
            <ul>
            {
                    LogementService.GetAllLogement().map((logement) => 
                        <li className='card'>
                            <NavLink className="card__navlink" key={logement.id} to={"/logement/" + logement.id + "/#"}>
                                <img class="card__navlink_img" src={logement.cover} alt={logement.title}  />
                                <p class="card__navlink_title">{logement.title}</p>
                                <span className='card__background_gradient'></span>
                            </NavLink>
                        </li>
                    )
                }
            </ul>
    );
};

export default Cards;