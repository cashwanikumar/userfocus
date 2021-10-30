import styled from 'styled-components';
import './App.css';
import { LeftBar } from './component/LeftBar';
import { MainContent } from './component/MainContent';

const Content = styled.div`
  display: flex;
  flex-direction: row;
`

function App() {
  return (
    <div className="App">
      <Content>
        <LeftBar />
        <MainContent />
      </Content>
    </div>
  );
}

export default App;
