import React from 'react';

const MovesList = ({ title, changeMove, sequence, move, moves }) => {
  return (
    <div className="moves-list">
      <h3>List of moves</h3>
      <h3>{title}</h3>
      {sequence().map((id, i) => (
        <p
          key={i}
          className={i === move ? 'highlight' : ''}
          onClick={() => changeMove(i)}
          style={{ cursor: 'pointer' }}
        >
          {i + 1} - {moves[id] ? moves[id].name : ''}
        </p>
      ))}
    </div>
  );
};

export default MovesList;
