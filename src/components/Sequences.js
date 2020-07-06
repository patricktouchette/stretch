import React from 'react';

const Sequences = ({ data, setSequenceId }) => {
  return (
    <div className="sequences">
      <h1>Choose your routine</h1>
      {data.map((seq, i) => (
        <p
          key={i}
          onClick={() => setSequenceId(i)}
          style={{ cursor: 'pointer' }}
        >
          {seq.name}
        </p>
      ))}
    </div>
  );
};

export default Sequences;
