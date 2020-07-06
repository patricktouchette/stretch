import { useState, useRef } from 'react';

const useTimer = ({ sequence, duration }) => {
  const intervalRef = useRef();
  const [isDone, setIsDone] = useState(false);
  const [timer, setTimer] = useState(duration);
  const [move, setMove] = useState(0);

  function nextMove() {
    setMove((prevMove) => {
      // Check if all moves are done
      if (prevMove >= sequence().length - 1) {
        clearInterval(intervalRef.current);
        setIsDone(true);
        setTimer(0);
        return prevMove;
      }
      // return next move
      return prevMove + 1;
    });
  }

  function decrementTime() {
    setTimer((prevTime) => {
      if (prevTime <= 0) {
        nextMove();
        return duration;
      }
      return prevTime - 1;
    });
  }

  const start = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(decrementTime, 1000);
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsDone(false);
    setTimer(duration);
    setMove(0);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  const changeMove = (index) => {
    reset();
    setMove(index);
    start();
  };

  const buttonHandlers = {
    start,
    stop,
    reset,
  };

  return { timer, move, changeMove, buttonHandlers, isDone };
};

export default useTimer;
