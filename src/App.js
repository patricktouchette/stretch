import React, { useState } from 'react';
import './App.css';
import sequences from './sequences.json';
import movesList from './moves.json';
import useTimer from './hooks/useTimer';
import Timer from './components/Timer';
import MovesList from './components/MovesList';
import Sequences from './components/Sequences';

const App = () => {
  const duration = 35;
  const [sequenceId, setSequenceId] = useState(0);
  const [showMoves, setShowMoves] = useState(false);

  const moves = movesList.reduce((obj, d) => {
    obj[d.id] = d;
    return obj;
  }, {});

  const sequence = () => {
    if (sequenceId === undefined) return [];
    return sequences[sequenceId].sequence;
  };

  const state = useTimer({ sequence, duration });
  const { timer, move, changeMove, buttonHandlers, isDone } = state;

  const Countdown = () => (
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
          {moves[sequence()[move]].name}
        </h1>
      </div>

      <Timer timer={timer} buttonHandlers={buttonHandlers} />

      <div>{isDone ? <h1>FINISHED</h1> : ''}</div>

      <button
        onClick={() => {
          buttonHandlers.reset();
          setSequenceId(undefined);
        }}
      >
        BACK
      </button>

      <button onClick={() => setShowMoves(true)}>Show Moves</button>
    </section>
  );

  const showView = () => {
    if (sequenceId === undefined)
      return <Sequences data={sequences} setSequenceId={setSequenceId} />;

    if (showMoves)
      return (
        <section>
          <button onClick={() => setShowMoves(false)}>Back</button>

          <MovesList
            title={sequences[sequenceId].name}
            changeMove={changeMove}
            sequence={sequence}
            move={move}
            moves={moves}
          />
          <button onClick={() => setShowMoves(false)}>Back</button>
        </section>
      );

    return <Countdown />;
  };

  return (
    <div className="app">
      <header>
        <div className="header-container container">
          <h4> Stretch App</h4>
          <p>About</p>
        </div>
      </header>

      <div className="container">{showView()}</div>

      <footer>
        <small>&copy; 2020 Patrick Touchette</small>
      </footer>
    </div>
  );
};

export default App;
