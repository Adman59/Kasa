import React from 'react';
import { NavLink } from 'react-router-dom';


const Cards = ({id,title, cover}) => {
    return (

        <li className='card'>
            <NavLink className="card__navlink" key={id} to={"/logement/" + id + "/#"}>
                <img className="card__navlink_img" src={cover} alt={title}  />
                <p className="card__navlink_title">{title}</p>
                <span className='card__background_gradient'></span>
            </NavLink>
        </li>
         
    );
};

export default Cards;