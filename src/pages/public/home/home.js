import React from 'react';

import Hero from '@/components/hero/hero.js';
import Cards from '@/components/cards/cards.js';
import BannerHomeImage from '@/assets/images/pages/home/HeroAccueil.png'

import LogementService from "@/_services/logement.service.js"

const Home = () => {
    return (
        <section className="home">
            <Hero img={BannerHomeImage} title="Chez vous, partout et ailleurs" />
            <ul className='listCards'>
               
            {
                LogementService.GetAllLogement().map((logement) => 
                 <Cards key={logement.id} id={logement.id} title={logement.title} cover={logement.cover}/>
                )
            }
               
            </ul>
        </section>
    )
    
}

export default Home