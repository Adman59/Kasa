import React from 'react';

const Host = ({ owner }) => {

    const fullName = owner.name.split(' ');
    const firstName = fullName[0];
    const lastName = fullName[1];

    return (
        <div className='host'>
            <div className='host__name'>
                <span className='host__name__first'>{firstName}</span>
                <span className='host__name__last'>{lastName}</span>
            </div>
            <img src={owner.picture} alt="" className="host__avatar" />
        </div>
    );
};

export default Host;