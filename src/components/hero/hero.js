import React from 'react';

const Hero = ({img , title}) => {

    return (
        <div className='banner'>
            <img class="banner__background" src={img} alt="Bannière de la page d'accueil"  />
            <h1>{title}</h1>
        </div>
    )
};

export default Hero;