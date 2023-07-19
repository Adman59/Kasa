import React from 'react';
import { useState } from 'react'
import IconDropdownUp from '@/assets/images/components/Dropdown/DropDownFlecheHaut.png'
import IconDropdownDown from '@/assets/images/components/Dropdown/DropDownFlecheBas.png'

const Collapsible = ({ title , content }) => {

    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div className='collapsible'>
            <div className='collapsible__button' onClick={() => setIsOpen(false)}>{title} <img src={IconDropdownUp} alt="Icône de fermeture du dropdown"/></div>
            <div className='collapsible__content'>
                <p>{content}</p>
            </div>
        </div>
    ) : (
        <div className='collapsible'>
            <div className='collapsible__button' onClick={() => setIsOpen(true)}>{title} <img src={IconDropdownDown} alt="Icône d'ouverture du dropdown"/></div>
        </div>
    );
};

export default Collapsible;