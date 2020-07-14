import React from 'react';
import './Timer.css';
import { PrimaryButton, SecondaryButton } from '../components/buttons';

const Timer = ({ timer, buttonHandlers, isDone }) => {
  const seconds = `${timer}`.padStart(2, '0');
  const time = `00:${seconds}`;
  const timerText = isDone ? 'DONE' : time;

  return (
    <div className="timer">
      <div className="timer-countdown-container">
        <div style={{ textAlign: 'center' }}>
          <h3 className="timer-countdown">{timerText}</h3>
        </div>
      </div>

      <div className="timer-buttons-container">
        <PrimaryButton onClick={() => buttonHandlers.start()} text="▶" />
        <SecondaryButton onClick={() => buttonHandlers.stop()} text="| |" />
        <SecondaryButton onClick={() => buttonHandlers.reset()} text="🔁" />
      </div>
    </div>
  );
};

export default Timer;
