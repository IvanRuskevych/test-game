import './App.css';
import SpinButton from './components/SpinButton/SpinButton.jsx';
import { symbols } from './components/constants.js';
import ReelList from './components/ReelList/ReelList.jsx';
import { StyledWrapper } from './App.styled.js';

function App() {
  return (
    <>
      <StyledWrapper>
        <ReelList items={symbols} />
        <ReelList items={symbols} />
        <ReelList items={symbols} />
        <ReelList items={symbols} />
        <ReelList items={symbols} />
      </StyledWrapper>
      <SpinButton text={'SPIN'} />
    </>
  );
}

export default App;
