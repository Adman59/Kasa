import React from 'react';
import Hero from '@/components/hero/hero.js';
import Collapsible from '@/components/collapsible/collapsible.js';
import BannerAboutImage from '@/assets/images/pages/about/HeroApropos.png'

const About = () => {
    return (
        <section className="about">
            <Hero img={BannerAboutImage} title="" />
            <Collapsible title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
            <Collapsible title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Collapsible title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
            <Collapsible title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </section>
    )
    
}

export default About