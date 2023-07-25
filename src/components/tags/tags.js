import React from 'react';

const Tags = ({ tags }) => {
  return (
    <>
      {tags.map((tag, index) => (
        <div className='tag' key={index}>{tag}</div>
      ))}
    </>
  );
};

export default Tags;