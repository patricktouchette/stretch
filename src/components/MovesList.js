import React, { useEffect, useRef } from 'react';

const MovesList = ({ title, changeMove, sequence, move, moves }) => {
  const scrolledTo = useRef(0);

  useEffect(() => {
    if (scrolledTo.current === move) return;

    const el = document.getElementById(`list-item-${move}`);
    el.scrollIntoView({ behavior: 'smooth' });
    scrolledTo.current = move;
  });

  return (
    <div className="moves-list">
      <h3>{title}</h3>
      <div>
        <ul>
          {sequence().map((id, i) => (
            <li
              key={i}
              id={`list-item-${i}`}
              className={i === move ? 'highlight' : ''}
              onClick={() => changeMove(i)}
              style={{ cursor: 'pointer' }}
            >
              {i + 1} - {moves[id] ? moves[id].name : ''}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovesList;
