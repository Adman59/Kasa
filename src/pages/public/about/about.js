import React from 'react';
import Hero from '@/components/hero/hero.js';
import Collapsible from '@/components/collapsible/collapsible.js';
import BannerAboutImage from '@/assets/images/pages/about/HeroApropos.png'

import datacollapse from "@/assets/api/collapseinfo.json";

const About = () => {
    return (
        <section className="about">
            <Hero img={BannerAboutImage} title="" />
            {
               datacollapse.map((value) => 
                <Collapsible title={value.title} content={value.content}/>
              )
            }
        </section>
    )
    
}

export default About