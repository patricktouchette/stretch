import React, { useState } from 'react';
import './App.css';
// Data
import sequences from './sequences.json';
import movesList from './moves.json';
// Hooks
import useTimer from './hooks/useTimer';
// Views
import MovesList from './views/MovesList';
import Sequences from './views/Sequences';
import Countdown from './views/Countdown';
import About from './views/About';

const App = () => {
  const duration = 35;
  const [sequenceId, setSequenceId] = useState();
  const [showMoves, setShowMoves] = useState(false);
  const [showAbout, setShowAbout] = useState(true);

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

  const views = {
    home: <Sequences data={sequences} setSequenceId={setSequenceId} />,
    about: <About setShowAbout={setShowAbout} />,
    movesList: (
      <MovesList
        title={sequences[sequenceId] ? sequences[sequenceId].name : ''}
        changeMove={changeMove}
        setShowMoves={setShowMoves}
        sequence={sequence}
        move={move}
        moves={moves}
      />
    ),
    countdown: (
      <Countdown
        title={sequence()[move] ? moves[sequence()[move]].name : ''}
        timer={timer}
        buttonHandlers={buttonHandlers}
        isDone={isDone}
        setShowMoves={setShowMoves}
        setSequenceId={setSequenceId}
      />
    ),
  };

  const showView = () => {
    if (showAbout) return views.about;
    if (sequenceId === undefined) return views.home;
    if (showMoves) return views.movesList;
    return views.countdown;
  };

  return (
    <div className="app">
      <header>
        <div className="header-container container">
          <h4
            style={{ cursor: 'pointer' }}
            onClick={() => {
              buttonHandlers.reset();
              setSequenceId(undefined);
              setShowAbout(false);
            }}
          >
            Stretch<span style={{ color: 'var(--secondary)' }}>App</span>
          </h4>
          <p
            style={{ cursor: 'pointer' }}
            onClick={() => {
              buttonHandlers.stop();
              setShowAbout(true);
            }}
          >
            About
          </p>
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
