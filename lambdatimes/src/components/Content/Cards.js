import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = (props) => {
  return (
    <div className='cards-container'>
      {/* [x] Using the cards prop, map over the list creating a 
              new Card component for each passing the card as the only prop*/}
      {props.cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

// [x] Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      headline: PropTypes.string,
      img: PropTypes.string,
      tab: PropTypes.string,
    }),
  ),
};

export default Cards;
