# simple-react-dialog

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/simple-react-dialog.svg)](https://www.npmjs.com/package/simple-react-dialog) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-react-dialog
```

## Usage

```jsx
import React, { useState } from 'react';
import SimpleReactDialog from 'simple-react-dialog';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SimpleReactDialog onClose={() => setIsOpen(false)} value={isOpen}>
      <div classname='card'>
        <h1>Privacy Policy</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button onClick={() => setIsOpen(false)}>I ACCEPT</button>
      </div>
    </SimpleReactDialog>
  );
};
```

## License

MIT © [Adrien JOURDAN](https://gitlab.com/adrien.jourdan1)
