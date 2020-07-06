import React from 'react';

const Timer = ({ timer, buttonHandlers }) => {
  return (
    <div className="timer">
      <h3 style={{ fontSize: '4rem' }}>00:{`${timer}`.padStart(2, '0')}</h3>
      <button onClick={() => buttonHandlers.start()}>Start</button>
      <button onClick={() => buttonHandlers.stop()}>Stop</button>
      <button onClick={() => buttonHandlers.reset()}>reset</button>
    </div>
  );
};

export default Timer;
