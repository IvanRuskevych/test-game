import { ReelList } from './components/ReelList/ReelList.jsx';
import { SpinButton } from './components/SpinButton/SpinButton.jsx';
import { symbols } from './constants.js';
import { StyledWrapper } from './App.styled.js';

function App() {
  return (
    <>
      <h1>TWIN WIN GAMES TEST</h1>
      <SpinButton text={'SPIN'} />
      <StyledWrapper>
        <ReelList items={symbols} />
        <ReelList items={symbols} />
        <ReelList items={symbols} />
        <ReelList items={symbols} />
        <ReelList items={symbols} />
      </StyledWrapper>
    </>
  );
}

export default App;
