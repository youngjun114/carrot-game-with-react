import { useContext } from 'react';
import Field from './components/field/field';
import PopUp from './components/pop_up/pop_up';
import GameHeader from './components/game_header/game_header';
import { GameContext } from './context/game_context';

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

function App() {
  const { showPopUp } = useContext(GameContext);

  return (
    <>
      <section style={style}>
        <GameHeader carrotCount={CARROT_COUNT} />
        <Field carrotCount={CARROT_COUNT} bugCount={BUG_COUNT} />
      </section>
      {showPopUp && <PopUp />}
    </>
  );
}

export default App;
