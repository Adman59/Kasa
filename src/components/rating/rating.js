import React from 'react';
import RedStar from '@/assets/images/components/Stars/redstar.png'
import GreyStar from '@/assets/images/components/Stars/greystar.png'

const Rating = ({ rating }) => {

    const maxRating = 5 

    const getStarImage = (index) => {
        if (index < rating) {
            return RedStar 
        }
        return GreyStar 
    }

    return (
        <ul className="ratings">
            {Array.from({ length: maxRating }, (_, index) => (
                <li key={index}>
                    <img src={getStarImage(index)} alt="Star" />
                </li>
            ))}
        </ul>
    );
};

export default Rating;