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

  const moves = movesList.reduce((obj, d) => {
    obj[d.id] = d;
    return obj;
  }, {});

  const sequence = () => {
    return sequences[sequenceId].sequence;
  };

  const state = useTimer({ sequence, duration });
  const { timer, move, changeMove, buttonHandlers, isDone } = state;

  return (
    <div className="App">
      <h1> Stretch App</h1>

      <section className="move">
        <h1 style={{ fontSize: '4rem' }}>{moves[sequence()[move]].name}</h1>
      </section>

      <Timer timer={timer} buttonHandlers={buttonHandlers} />

      <MovesList
        title={sequences[sequenceId].name}
        changeMove={changeMove}
        sequence={sequence}
        move={move}
        moves={moves}
      />

      <div>{isDone ? <h1>FINISHED</h1> : ''}</div>

      <Sequences data={sequences} setSequenceId={setSequenceId} />
    </div>
  );
};

export default App;
