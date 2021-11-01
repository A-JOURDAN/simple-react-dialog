import React, { useState } from 'react';
import styled from 'styled-components';
import { SimpleReactDialog } from 'simple-react-dialog';

const Card = styled.div`
  width: 500px;
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

const Standard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2>Standard Dialog</h2>
      <div className="btns-container">
        <button onClick={() => setIsOpen(true)}>CLICK ME</button>
      </div>
      <SimpleReactDialog onClose={() => setIsOpen(false)} value={isOpen}>
        <Card>
          <h1>
            Privacy Policy
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p>
          <Button onClick={() => setIsOpen(false)}>I ACCEPT</Button>
        </Card>
      </SimpleReactDialog>
    </div>
  );
};

export default Standard;
