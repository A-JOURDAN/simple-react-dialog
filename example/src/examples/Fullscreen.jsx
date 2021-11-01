import React, { useState } from 'react';
import styled from 'styled-components';
import { SimpleReactDialog } from 'simple-react-dialog';

const Card = styled.div`
  height: 100vh;
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
    background-color: rgb(24, 103, 192);
    color: white;
  }

  p {
    margin: 16px 24px;
    font-size: 1rem;
    text-align: justify;
  }

  .buttons {
    display: flex;
    margin: 0 12px 8px auto;
    gap: 8px;
  }
`;

const Button = styled.button`
  background-color: transparent !important;
  color: rgba(24, 103, 192, 1);
  margin: 0 8px 8px auto;
  box-shadow: none;
  font-size: 1rem;

  &.btn--standard {
    color: rgba(24, 103, 192, 1);

    &:hover {
      background-color: rgba(24, 103, 192, 0.1) !important;
    }
  }

  &.btn--error {
    color: #F44336;

    &:hover {
      background-color: rgba(244, 67, 54, 0.1) !important;
    }
  }
`;

const Fullscreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2>Fullscreen</h2>
      <div className="btns-container">
        <button onClick={() => setIsOpen(true)}>OPEND DIALOG</button>
      </div>
      <SimpleReactDialog onClose={() => setIsOpen(false)} value={isOpen} transition="slide-y-revert" contentRadius="0" fullscreen hideOverlay>
        <Card>
          <h1>
            Terms of use
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p>

          <div className="buttons">
            <Button className="btn--error" onClick={() => setIsOpen(false)}>I REFUSE</Button>
            <Button className="btn--standard" onClick={() => setIsOpen(false)}>I ACCEPT</Button>
          </div>
        </Card>
      </SimpleReactDialog>
    </div>
  );
};

export default Fullscreen;
