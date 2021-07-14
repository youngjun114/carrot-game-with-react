import { createContext, useState, useEffect } from 'react';
const DURATION = 10;

const initialState = {
  start: false,
  score: 0,
  sec: 0,
  reset: () => {},
  startGame: () => {},
  stopGame: () => {},
  handleScore: () => {},
  startTimer: () => {},
  stopTimer: () => {},
};
export const GameContext = createContext(initialState);

function GameProvider(props) {
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);
  const [sec, setSec] = useState(DURATION);
  const [showPopUp, setShowPopUp] = useState(false);
  const [message, setMessage] = useState('');

  let timer;

  const startGame = () => {
    setStart(true);
    setShowPopUp(false);
  };

  const stopGame = (reason) => {
    setScore(0);
    setStart(false);
    setShowPopUp(true);
    setMessage(getMessage(reason));
    stopTimer();
  };

  const handleScore = () => {
    setScore(score + 1);
  };

  const startTimer = () => {
    if (sec > 0) {
      timer = setTimeout(() => {
        setSec((sec) => sec - 1);
        console.log(sec);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearTimeout(timer);
  };

  useEffect(() => {
    if (start && sec > 0) {
      startTimer();
    }
    return () => {
      clearTimeout(timer);
    };
  }, [start, sec]);

  return (
    <GameContext.Provider
      value={{
        sec,
        start,
        score,
        message,
        showPopUp,
        stopGame,
        startGame,
        handleScore,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}

export default GameProvider;

function getMessage(reason) {
  let message;
  switch (reason) {
    case 'cancel':
      message = 'REPLAY?';
      break;
    case 'win':
      message = '🎉YOU WON🎉';
      break;
    case 'lose':
      message = '💩YOU LOST💩';
      break;
    default:
      throw new Error('not valid reason');
  }
  return message;
}
