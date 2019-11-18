import React, { useState, useEffect } from 'react';
// import CardsArray from '../cards';
import './Board.scss';

import Card from './Card';

function Board() {

  const [unflipped, setUnflipped] = useState([]);
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'red',
      state: 'flipped' // unflipped, done
    },
    {
      id: 2,
      name: 'red',
      state: 'flipped' // unflipped, done
    },
    {
      id: 3,
      name: 'blue',
      state: 'flipped' // unflipped, done
    },
    {
      id: 4,
      name: 'blue',
      state: 'flipped' // unflipped, done
    },
    {
      id: 5,
      name: 'green',
      state: 'flipped' // unflipped, done
    },
    {
      id: 6,
      name: 'green',
      state: 'flipped' // unflipped, done
    },
  ]);

  useEffect(() => {
    const unflippedCards = cards.filter(card => card.state === 'unflipped');
    setUnflipped(unflippedCards);
  }, [cards]);

  useEffect(() => {
    if (unflipped.length === 2) {
      if (unflipped[0].name !== unflipped[1].name) {
        clearCards();
      } else {
        doneCards();
      }
    }
  }, [unflipped]);

  const flipCard = (selectedCard) => {
    if (selectedCard.state === 'flipped') {
      let newCards = [...cards];
      const cardIndex = newCards.findIndex((card) => card.id === selectedCard.id);
      newCards[cardIndex].state = 'unflipped';
      setCards(newCards);
    }
  };

  const clearCards = () => {
    let newCards = cards.map((card) => {
      let newCard = { ...card };
      if (newCard.state !== 'done') {
        newCard.state = 'flipped';
      }
      return newCard;
    });
    setCards(newCards);
    setUnflipped([]);
  }

  const doneCards = () => {
    let newCards = cards.map((card) => {
      let newCard = { ...card };
      if (newCard.state === 'unflipped') {
        newCard.state = 'done';
      }
      return newCard;
    });
    setCards(newCards);
    setUnflipped([]);
  }

  return (
    <div className="board">
      REACT PUZZLE (unflipped: {unflipped.length})

      <div className="cards-container">

        { cards.map(card =>
          <Card
            key={card.id}
            cardInfo={card}
            propagateFlipCard={flipCard}
          />)
        }

      </div>
    </div>
  );
}

export default Board;
