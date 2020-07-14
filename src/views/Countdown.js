import React from 'react';
import Timer from '../components/Timer';
import { SecondaryButton, AccentButton } from '../components/buttons';

const Countdown = ({
  title,
  timer,
  buttonHandlers,
  isDone,
  setShowMoves,
  setSequenceId,
}) => {
  return (
    <section>
      <div className="move">
        <h1
          style={{
            fontSize: '1.75rem',
            minHeight: '100px',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          {title}
        </h1>
      </div>

      <Timer timer={timer} buttonHandlers={buttonHandlers} isDone={isDone} />

      <div
        style={{
          display: 'grid',
          marginTop: '1rem',
          gridGap: '1rem',
        }}
      >
        <AccentButton text="💪 Show Moves" onClick={() => setShowMoves(true)} />

        <SecondaryButton
          text="👈 Back"
          onClick={() => {
            buttonHandlers.reset();
            setSequenceId(undefined);
          }}
        />
      </div>
    </section>
  );
};

export default Countdown;
