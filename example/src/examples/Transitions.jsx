import React, { useState } from 'react';
import styled from 'styled-components';
import { SimpleReactDialog } from 'simple-react-dialog';

const Card = styled.div`
  border-radius: 4px;
  background-color: white;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 500;
    font-size: 1.6rem;
    box-sizing: border-box;
    padding: 16px 24px;
    margin: 0;
    width: 100%;
    background-color: rgba(24, 103, 192, 0.2);
    color: rgb(24, 103, 192);
  }

  p {
    margin: 16px 24px;
    font-size: 1rem;
    text-align: justify;
  }
`;

const Button = styled.button`
  background-color: transparent !important;
  color: rgba(24, 103, 192, 1);
  margin: 0 8px 8px auto;
  box-shadow: none;
  font-size: 1rem;

  &:hover {
    background-color: rgba(24, 103, 192, 0.1) !important;
  }
`;

const Transitions = () => {
  const [isOneOpen, setIsOneOpen] = useState(false);
  const [isTwoOpen, setIsTwoOpen] = useState(false);
  const [isThreeOpen, setIsThreeOpen] = useState(false);
  const [isFourOpen, setIsFourOpen] = useState(false);

  return (
    <div>
      <h2>Transitions</h2>
      <p>You can set the transition and the origin point.</p>
      <div className="btns-container">
        <button onClick={() => setIsOneOpen(true)}>SLIDE X</button>
        <button onClick={() => setIsTwoOpen(true)}>SLIDE Y REVERT</button>
        <button onClick={() => setIsThreeOpen(true)}>FAB TOP/LEFT</button>
        <button onClick={() => setIsFourOpen(true)}>SCALE BOTTOM</button>
      </div>
        <SimpleReactDialog onClose={() => setIsOneOpen(false)} value={isOneOpen} transition="slide-x">
          <Card>
            <h1>
              Slide X Transition
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </p>
            <Button onClick={() => setIsOneOpen(false)}>CLOSE</Button>
          </Card>
        </SimpleReactDialog>
        <SimpleReactDialog onClose={() => setIsTwoOpen(false)} value={isTwoOpen} transition="slide-y-revert">
          <Card>
            <h1>
              Slide Y Revert Transition
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </p>
            <Button onClick={() => setIsTwoOpen(false)}>CLOSE</Button>
          </Card>
        </SimpleReactDialog>
        <SimpleReactDialog onClose={() => setIsThreeOpen(false)} value={isThreeOpen} transition="fab" origin="top left">
          <Card>
            <h1>
              FAB Transition with transform origin "top left"
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </p>
            <Button onClick={() => setIsThreeOpen(false)}>CLOSE</Button>
          </Card>
        </SimpleReactDialog>
        <SimpleReactDialog onClose={() => setIsFourOpen(false)} value={isFourOpen} origin="bottom">
          <Card>
            <h1>
              Scale Transition with transform origin "bottom"
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </p>
            <Button onClick={() => setIsFourOpen(false)}>CLOSE</Button>
          </Card>
        </SimpleReactDialog>
    </div>
  );
};

export default Transitions;
