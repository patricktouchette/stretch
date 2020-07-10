import React from 'react';
import './Timer.css';

const Timer = ({ timer, buttonHandlers }) => {
  return (
    <div className="timer">
      <div className="timer-countdown-container">
        <h3 className="timer-countdown">00:{`${timer}`.padStart(2, '0')}</h3>
      </div>

      <div>
        <button onClick={() => buttonHandlers.start()}>Start</button>
        <button onClick={() => buttonHandlers.stop()}>Stop</button>
      </div>
      <button onClick={() => buttonHandlers.reset()}>reset</button>
    </div>
  );
};

export default Timer;
