import React from 'react';
import { render } from "react-dom";
import Standard from './examples/Standard';
import Fullscreen from './examples/Fullscreen';
import Transitions from './examples/Transitions';
import Persistent from './examples/Persistent';
import './index.scss'
import styled from 'styled-components';

const Container = styled.main`
  max-width: 760px;
  margin: auto;
`;

const Header = styled.main`
  margin-bottom: 48px;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <h1>Dialogs</h1>
        <p>
          Dialogs inform users about a specific task and may contain critical information, 
          require decisions, or involve multiple tasks. Use dialogs sparingly because they are interruptive.
        </p>
      </Header>
      <Standard />
      <Fullscreen />
      <Transitions />
      <Persistent />
    </Container>
  );
};

render(<App />, document.getElementById("root"));
