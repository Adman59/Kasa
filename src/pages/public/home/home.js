import React from 'react';

import Hero from '@/components/hero/hero.js';
import Cards from '@/components/cards/cards.js';
import BannerHomeImage from '@/assets/images/pages/home/HeroAccueil.png'

const Home = () => {
    return (
        <section className="home">
            <Hero img={BannerHomeImage} title="Chez vous, partout et ailleurs" />
            <ul className='listCards'>
                <Cards />
            </ul>
        </section>
    )
    
}

export default Home