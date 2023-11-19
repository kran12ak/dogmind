// HalfCirclePic.js
import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/HalfCirclePic.css';

const HalfCirclePic = ({ imageUrl, shouldReverse }) => {
  // Use shouldReverse to determine the reverse class
  const reverseClass = shouldReverse ? 'reverse-half-circle' : '';

  return (
    <div className={`half-circle-container ${reverseClass}`}>
      <img
        src={imageUrl} 
        alt="Welpen-Training"
        className="half-circle-image"
      />
    </div>
  );
};

HalfCirclePic.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  shouldReverse: PropTypes.bool.isRequired,
};

export default HalfCirclePic;
