import '../../index.css'
import './juani_afk.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const cardImages = [
  { color: "#ff4d4d", matched: false },
  { color: "#ff4d4d", matched: false },
  { color: "#4d4dff", matched: false },
  { color: "#ffff4d", matched: false },
  { color: "#ff4dff", matched: false },
  { color: "#4dffff", matched: false },
];

function Juani_afk() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Barajar cartas
  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffled);
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  // Comparar dos cartas
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.color === choiceTwo.src) {
        setCards(prev =>
          prev.map(card =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(resetTurn, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Elegir carta
  const handleChoice = (card) => {
    if (!disabled) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };

  // Reset turno
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  // Iniciar juego al cargar
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="memorama">
      <h1>Memorama</h1>
      <button onClick={shuffleCards}>Reiniciar</button>
      <div className="card-grid">
        {cards.map(card => (
          <div
            key={card.id}
            className={`card ${card === choiceOne || card === choiceTwo || card.matched ? 'flipped' : ''}`}
            onClick={() => handleChoice(card)}
          >
            <img src={card.flipped || card === choiceOne || card === choiceTwo || card.matched ? card.src : "/images/back.png"} alt="carta" />
          </div>
        ))}
      </div><Link className="button" to="/">Volver al inicio</Link>
    </div>
  );
}


export default Juani_afk;
