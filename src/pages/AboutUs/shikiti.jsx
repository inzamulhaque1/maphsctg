import React from 'react';
import image from '../../assets/img/shikiti/shikiti.jpeg';

const Shikiti = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img
        src={image}
        alt="Shikiti"
        className=" h-full"
      />
    </div>
  );
};

export default Shikiti;
