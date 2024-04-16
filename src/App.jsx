import { useState } from 'react';
import { actionReel, getRandomIntInclusive } from './utils/index.js';
import { ReelList } from './components/ReelList/ReelList.jsx';
import { SpinButton } from './components/SpinButton/SpinButton.jsx';
import { symbols } from './constants/constants.js';
import { StyledWrapper } from './App.styled.js';

function App() {
  const [firstReelSymbols, setFirstReelSymbols] = useState(symbols);
  const [secondReelSymbols, setSecondReelSymbols] = useState(symbols);
  const [thirdReelSymbols, setThirdReelSymbols] = useState(symbols);
  const [fourthReelSymbols, setFourthReelSymbols] = useState(symbols);
  const [fifthReelSymbols, setFifthReelSymbols] = useState(symbols);

  const payloadReels = [
    {
      id: 'firstReel',
      symbols: firstReelSymbols,
      setSymbols: setFirstReelSymbols,
      spinNumber: getRandomIntInclusive(1, 7),
    },
    {
      id: 'secondReel',
      symbols: secondReelSymbols,
      setSymbols: setSecondReelSymbols,
      spinNumber: getRandomIntInclusive(8, 15),
    },
    {
      id: 'thirdReel',
      symbols: thirdReelSymbols,
      setSymbols: setThirdReelSymbols,
      spinNumber: getRandomIntInclusive(16, 23),
    },
    {
      id: 'fourthReel',
      symbols: fourthReelSymbols,
      setSymbols: setFourthReelSymbols,
      spinNumber: getRandomIntInclusive(24, 31),
    },
    {
      id: 'fifthReel',
      symbols: fifthReelSymbols,
      setSymbols: setFifthReelSymbols,
      spinNumber: getRandomIntInclusive(32, 39),
    },
  ];

  const handleStartGame = () => {
    payloadReels.map(({ symbols, spinNumber, setSymbols }) => {
      actionReel(symbols, spinNumber, setSymbols);
    });
  };

  return (
    <>
      <h1>TWIN WIN GAMES TEST</h1>
      <StyledWrapper>
        {payloadReels.map(({ id, symbols }) => (
          <ReelList key={id} items={symbols} />
        ))}
      </StyledWrapper>
      <SpinButton text={'SPIN'} onClick={handleStartGame} />
    </>
  );
}

export default App;
