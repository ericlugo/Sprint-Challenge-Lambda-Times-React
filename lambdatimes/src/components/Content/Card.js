import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className='card'>
      <div className='headline'>{/* [x] headline goes here */ props.card.headline}</div>
      <div className='author'>
        <div className='img-container'>
          <img src={/* [x] image source goes here */ props.card.img} alt={props.card.author} />
        </div>
        <span>By {/* [x] author goes here */ props.card.author}</span>
      </div>
    </div>
  );
};

// [x] Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string,
    tab: PropTypes.string,
  }),
};

export default Card;
