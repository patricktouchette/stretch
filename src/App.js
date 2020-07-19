import React, { useState } from 'react';
import './App.css';
// Data
import sequences from './data/sequences.json';
import movesList from './data/moves.json';
// Hooks
import useTimer from './hooks/useTimer';
// Views
import MovesList from './views/MovesList';
import Sequences from './views/Sequences';
import Countdown from './views/Countdown';
import About from './views/About';
import Header from './components/Header';

const App = () => {
  // State
  const duration = 35;
  const [sequenceId, setSequenceId] = useState();
  const [showMoves, setShowMoves] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  // Create the moves hash table
  const moves = movesList.reduce((obj, d) => {
    obj[d.id] = d;
    return obj;
  }, {});

  // Accessor function to get the sequence array
  const sequence = () => {
    if (sequenceId === undefined) return [];
    return sequences[sequenceId].sequence;
  };

  // Get the timer state
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

  const handleHomeClick = () => {
    buttonHandlers.reset();
    setSequenceId(undefined);
    setShowAbout(false);
    setShowMoves(false);
  };

  const handleAboutClick = () => {
    buttonHandlers.stop();
    setShowAbout(true);
  };

  return (
    <div className="app">
      <Header
        handleHomeClick={handleHomeClick}
        handleAboutClick={handleAboutClick}
      />

      <div className="container">{showView()}</div>

      <footer>
        <small>
          &copy; 2020{' '}
          <a href="https://patricktouchette.com">Patrick Touchette</a>
        </small>
      </footer>
    </div>
  );
};

export default App;
