import { useState } from 'react';
import { FaLink } from 'react-icons/fa';

function Charactercard({ cards, FaCircle }) {
  return (
    <>
      {cards.map((card) => {
        return (
          <div className="card" key={card.id}>
            <img src={card.image} alt="" width="100%" />
            <div className="details">
              <h1 className="characterName">{card.name}</h1>
              <div className="charaterStatus">
                <span className="status green">
                  <FaCircle />
                </span>
                <span className="specie">
                  {card.status}-{card.species}
                </span>
              </div>

              <div className="origin">
                <span className="faded-text">Origin:</span>
                <span className="placeOrigin">{card.origin.name}</span>
              </div>
              <div className="location">
                <span className="faded-text">Last known location:</span>
                <span className="placeOrigin">{card.location.name}</span>
              </div>
              <span>
                <FaLink />
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Charactercard;
