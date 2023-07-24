import React, { useState } from 'react';
import IconLeft from '@/assets/images/components/Gallery/GalleryArrowLeft.png'
import IconRight from '@/assets/images/components/Gallery/GalleryArrowRight.png'

const Gallery = ({ slides }) => {

    let [index, setIndex] = useState(0);


    const nextImage = () => {
        setIndex(index === slides.length - 1 ? 0 : index + 1)
    }

    const previousImage = () => {
        setIndex(index === 0 ? slides.length - 1 : index - 1)
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