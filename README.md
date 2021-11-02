[![NPM](https://img.shields.io/npm/v/simple-react-dialog.svg)](https://www.npmjs.com/package/simple-react-dialog) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# simple-react-dialog

> A simple and reusable Dialog component for React
> Look at the [DEMO](https://a-jourdan.github.io/simple-react-dialog/)

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

## Required Props

Prop you have to include :

- value - specify the opening state of the Dialog (ex: true)
- onClose - the function that will be used for close the Dialog (ex: setIsOpen(false))

## Props

Common props you may want to specify include :

- contentRadius (default: '4px')
- fullscreen (default: false)
- hideOverlay (default: false)
- origin (default: 'center')
- overlayColor (default: '#000')
- overlayOpacity (default: '0.4')
- persistent (default: false)
- transition (default: 'scale')
- width (default: '500px')

## License

MIT © [Adrien JOURDAN](https://gitlab.com/adrien.jourdan1)
