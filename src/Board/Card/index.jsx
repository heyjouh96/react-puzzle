import React, { useState, useEffect } from 'react';
import './Card.scss';

function Card({ cardInfo, propagateFlipCard }) {

  const [cardColor, setCardColor] = useState(null);

  useEffect(() => {
    setCardColor(getColorClass(cardInfo.name));
  }, [cardInfo]);

  const getColorClass = (name) => ({
    'red': 'card--red',
    'blue': 'card--blue',
    'green': 'card--green',
  })[name];

  return (
    <div onClick={() => propagateFlipCard(cardInfo)} className={`card ${cardColor} ${cardInfo.state !== 'flipped' ? 'show' : ''}`}>
      {cardInfo.name}
    </div>
  );
}

export default Card;
