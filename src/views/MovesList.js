import React, { useEffect, useRef } from 'react';
import './MovesList.css';
import { PrimaryButton } from '../components/buttons';

const MovesList = ({
  title,
  changeMove,
  setShowMoves,
  sequence,
  move,
  moves,
}) => {
  const scrolledTo = useRef(0);

  useEffect(() => {
    if (scrolledTo.current === move) return;

    const el = document.getElementById(`list-item-${move}`);
    el.scrollIntoView({ behavior: 'smooth' });
    scrolledTo.current = move;
  });

  return (
    <div className="moves-list">
      <h2 className="moves-list__title">{title}</h2>

      <ul className="moves-list__list">
        {sequence().map((id, i) => (
          <li
            key={i}
            id={`list-item-${i}`}
            className={
              i === move ? 'moves-list__item highlight' : 'moves-list__item'
            }
            onClick={() => {
              changeMove(i);
              setShowMoves(false);
            }}
            style={{ cursor: 'pointer' }}
          >
            {i + 1}. {moves[id] ? moves[id].name : ''}
          </li>
        ))}
      </ul>

      <div className="moves-list__button">
        <PrimaryButton text="Back" onClick={() => setShowMoves(false)} full />
      </div>
    </div>
  );
};

export default MovesList;
