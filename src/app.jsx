/*eslint-disable*/

import { useEffect, useState } from 'react';
import Field from './components/field/field';
import PopUp from './components/pop_up/pop_up';
import GameHeader from './components/game_header/game_header';

const style = {
  background: 'url(img/background.png) center/cover',
  backgroundRepeat: 'no-repeat',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  width: '800px',
  height: '500px',
  margin: ' auto',
};

const CARROT_COUNT = 10;
const BUG_COUNT = 10;
const DURATION = 5;

function App() {
  const [sec, setSec] = useState(DURATION);
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);
  const [showPopUp, setShowPopUp] = useState(true);
  const [message, setMessage] = useState('hello');

  let timer;

  const startGame = () => {
    setStart(true);
  };

  const stopGame = () => {
    setStart(false);
    clearTimeout(timer);
  };

  const handleScore = () => {
    setScore(score + 1);
  };

  useEffect(() => {
    if (start && sec > 0) {
      timer = setTimeout(() => {
        setSec((sec) => sec - 1);
        console.log(sec);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [start, sec]);

  return (
    <>
      <section style={style}>
        <GameHeader
          start={start}
          timeRemaining={sec}
          score={score}
          carrotCount={CARROT_COUNT}
          startGame={startGame}
          stopGame={stopGame}
        />
        <Field
          start={start}
          carrotCount={CARROT_COUNT}
          bugCount={BUG_COUNT}
          handleScore={handleScore}
        />
      </section>
      {showPopUp && <PopUp message={message} />}
    </>
  );
}

export default App;
