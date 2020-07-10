import React from 'react';

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
            style={{
              cursor: 'pointer',
              background: 'lightgrey',
              padding: '1rem',
              margin: '1rem 0',
            }}
          >
            <h2>{seq.name}</h2>
            <p>
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
