import React, { useState } from 'react';
import IconLeft from '@/assets/images/components/Gallery/GalleryArrowLeft.png'
import IconRight from '@/assets/images/components/Gallery/GalleryArrowRight.png'

const Gallery = ({ slides }) => {

    let [index, setIndex] = useState(0);


    const nextImage = () => {
        setIndex((indexprec) => 
            indexprec + 1 === slides.length ? 0 : indexprec + 1)
    }
    const previousImage = () => {

    }

    return (
        <div className="slideshow">
        <img className="arrowLeft" src={IconLeft} alt="flèche gauche" onClick={() => previousImage()} />
        <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>

            {slides.map((picture, index) => (
                <div className="slide" key={index} style={{ background: `no-repeat center/cover url(${picture})` }}></div>

            ))}
        </div>
        <img className="arrowRight" src={IconRight} alt="flèche droite" onClick={() => nextImage()} />
        <span className="paging"> {index + 1} / {slides.length} </span>
    </div>
    );
};

export default Gallery;