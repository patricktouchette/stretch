import React from 'react';
import './sequences.css';

const Sequences = ({ data, setSequenceId }) => {
  return (
    <div className="sequences">
      <h1>Choose your routine</h1>
      {data.map((seq, i) => {
        const time = seq.sequence.length * 35;
        const mins = Math.round(time / 60);

        return (
          <div
            key={i}
            onClick={() => setSequenceId(i)}
            className="sequence-card"
          >
            <h2 className="title">{seq.name}</h2>
            <p className="author">{seq.author}</p>
            <p className="time">
              <span role="img" aria-label="clock">
                ⌚
              </span>{' '}
              {mins} mins
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Sequences;
